import { SCRIPTED_VISION_PLACEHOLDER } from "./brains/vision";
import type { VisionFn, VisionImage } from "./brains/types";

/**
 * Image-into-a-run plumbing (contract B). The image a reader picks or uploads
 * on the start form has two very different consumers, so the runner holds both
 * halves and hands the right one to whichever vision brain is active:
 *
 * - a **small reference** (`imageId` for a gallery pick, `imageName` for an
 *   upload) is the ONLY thing that goes into process variables — a multi-MB
 *   data URL must never become a BPMN variable, or every trace/snapshot copies
 *   it around;
 * - the **actual pixels** (a data URL string, or the uploaded `File`/`Blob`)
 *   live in run-scoped context in `useExampleRun`, keyed to the process
 *   instance and dropped when the run ends.
 *
 * The scripted-vision fallback additionally identifies a seed image by its
 * **id** (see `brains/vision.ts` — a bare-string `VisionImage` is treated as a
 * seed id), so for a gallery pick the runner feeds the id, not the pixels, to
 * the scripted brain; a live browser-vision brain always gets the pixels.
 */
export interface RunImage {
  /** The seed image id for a gallery pick (absent for an upload). */
  imageId?: string;
  /** The uploaded file's name for an upload (absent for a gallery pick). */
  imageName?: string;
  /**
   * The actual bytes: a data URL / http(s) URL string for a seed image, or the
   * uploaded `File`/`Blob`. Fed to a live browser-vision brain. Optional so a
   * gallery pick with no preloaded pixels still resolves for the scripted brain
   * via its `imageId`.
   */
  pixels?: VisionImage;
}

/**
 * The small reference variables to merge into the process seed for `image` —
 * `{ imageId }` for a gallery pick, `{ imageName }` for an upload, `{}` when
 * nothing is selected. Never contains the pixels: this is what guarantees no
 * data URL leaks into a BPMN variable.
 */
export function imageRefVariables(
  image: RunImage | null | undefined,
): Record<string, string> {
  if (!image) return {};
  if (image.imageId) return { imageId: image.imageId };
  if (image.imageName) return { imageName: image.imageName };
  return {};
}

/**
 * Pick the `VisionImage` argument to hand a vision brain for this run's image.
 *
 * - A **live** browser-vision brain reads real pixels, so it gets `pixels`
 *   (the uploaded file, or the seed image's data URL/URL).
 * - The **scripted** fallback identifies a seed image by its id, so it gets
 *   `imageId` — that is how the example's `scriptedVision` ground truth reaches
 *   `helpers.vision`. An upload (no `imageId`) falls back to its `pixels`
 *   (a `Blob`), which the scripted brain maps to the UNKNOWN placeholder.
 */
export function pickVisionArg(
  image: RunImage,
  live: boolean,
): VisionImage | undefined {
  return live
    ? (image.pixels ?? image.imageId)
    : (image.imageId ?? image.pixels);
}

/**
 * What the runner threads into `compile.ts`'s `helpersFor` so a handler's
 * `helpers.vision`/`helpers.image` resolve the current run's image and read it
 * with the active brain. Owned by the runner; `undefined` for an example with
 * no `imageInput`.
 */
export interface VisionSupport {
  /** The active reader: the connected live `VisionFn`, or the scripted fallback. */
  read: VisionFn;
  /** True when a live browser-vision brain is connected (drives `pickVisionArg`). */
  live: boolean;
  /** The current run's image for a process instance, or `undefined` if none. */
  resolve(instanceKey: string): RunImage | undefined;
}

/**
 * What a vision accessor resolves to when there is nothing to read: no image
 * was selected, or the selected image carries no argument the active brain can
 * use. On the **live** path the scripted placeholder would be misleading (it
 * claims the scripted brain is in use), so a live brain gets a neutral
 * "no image" message instead.
 */
export const NO_LIVE_IMAGE_MESSAGE =
  "No image selected — pick or upload a photo to read.";

function noImageResult(live: boolean): string {
  return live ? NO_LIVE_IMAGE_MESSAGE : SCRIPTED_VISION_PLACEHOLDER;
}

/**
 * Build a handler's `vision(prompt)` for one job. Resolves this run's image and
 * reads it with the active brain, and — per contract B — **never throws**: a
 * missing image or a mid-run backend failure resolves to a clearly-marked
 * string rather than raising an incident on a service task.
 */
export function makeVisionAccessor(
  support: VisionSupport,
  instanceKey: string,
): (prompt: string) => Promise<string> {
  return async (prompt: string) => {
    const image = support.resolve(instanceKey);
    if (!image) return noImageResult(support.live);
    const arg = pickVisionArg(image, support.live);
    if (arg === undefined) return noImageResult(support.live);
    try {
      return await support.read(arg, prompt);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      return `Couldn't read the image (${message}).`;
    }
  };
}

/**
 * The lower-level accessor: the current run's `VisionImage` (pixels for an
 * upload/seed image, else the seed id), or `undefined` when nothing is picked.
 * Lets a handler pass the image to the brain itself.
 */
export function makeImageAccessor(
  support: VisionSupport,
  instanceKey: string,
): () => Promise<VisionImage | undefined> {
  return async () => {
    const image = support.resolve(instanceKey);
    if (!image) return undefined;
    return pickVisionArg(image, support.live);
  };
}
