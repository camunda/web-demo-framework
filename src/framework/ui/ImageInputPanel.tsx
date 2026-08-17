import { useCallback, useId, useRef, useState } from "react";
import type { SeedImage } from "../types";
import type { RunImage } from "../imageInput";

/**
 * The image start affordance (contract B), rendered by `ExampleRunner` **only**
 * when an example declares `imageInput` — every other example keeps its
 * ordinary start form untouched. It offers two ways to give the run an image:
 *
 * - a **gallery** of the example's seed thumbnails (deterministic, and the
 *   scripted-vision fallback knows their ground-truth plates by id), and
 * - **"upload your own photo"** (drag-drop or file picker) — the proof the demo
 *   is real: a live browser-vision brain reads a photo it has never seen.
 *
 * It reports the picked/uploaded image up as a {@link RunImage}: a small
 * reference (`imageId`/`imageName`) plus the actual `pixels` the runner holds
 * run-scoped. The pixels never become a BPMN variable — see `imageInput.ts`.
 */
export function ImageInputPanel({
  imageInput,
  value,
  onSelect,
  disabled = false,
}: {
  imageInput: { seedImages: SeedImage[]; label?: string };
  value: RunImage | null;
  onSelect(image: RunImage | null): void;
  disabled?: boolean;
}) {
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  // Unique per instance so multiple mounted panels can't collide on the same
  // DOM ids (which would break aria-labelledby / label-htmlFor associations).
  const galleryLabelId = useId();
  const uploadInputId = useId();

  const readFile = useCallback(
    (file: File) => {
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = String(reader.result);
        setUploadPreview(dataUrl);
        // The upload has no seed id, so the scripted brain resolves it to its
        // UNKNOWN placeholder; a live brain reads the actual pixels.
        onSelect({ imageName: file.name, pixels: dataUrl });
      };
      reader.readAsDataURL(file);
    },
    [onSelect],
  );

  const onFiles = useCallback(
    (files: FileList | null) => {
      const file = files?.[0];
      if (file && file.type.startsWith("image/")) readFile(file);
    },
    [readFile],
  );

  const selectedSeed =
    value?.imageId != null
      ? imageInput.seedImages.find((s) => s.id === value.imageId)
      : undefined;

  return (
    <div className="image-input">
      {imageInput.label && <p className="field-hint">{imageInput.label}</p>}

      <p className="image-input-label" id={galleryLabelId}>Seed photos</p>
      <div className="image-gallery" role="group" aria-labelledby={galleryLabelId}>
        {imageInput.seedImages.map((img) => {
          const selected = value?.imageId === img.id;
          return (
            <button
              key={img.id}
              type="button"
              aria-pressed={selected}
              className={`image-thumb${selected ? " image-thumb--selected" : ""}`}
              disabled={disabled}
              title={img.label ?? img.id}
              onClick={() => {
                setUploadPreview(null);
                // Seed pixels are the asset URL a live brain can load directly;
                // the scripted brain instead matches on `imageId`.
                onSelect({ imageId: img.id, pixels: img.file });
              }}
            >
              <img src={img.thumb ?? img.file} alt={img.label ?? img.id} />
              {img.label && <span>{img.label}</span>}
            </button>
          );
        })}
      </div>

      <label className="image-input-label" htmlFor={uploadInputId}>
        Or upload your own photo
      </label>
      <div
        className={`image-drop${dragOver ? " image-drop--over" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          if (!disabled) setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (!disabled) onFiles(e.dataTransfer.files);
        }}
      >
        <input
          ref={inputRef}
          id={uploadInputId}
          type="file"
          accept="image/*"
          disabled={disabled}
          onChange={(e) => onFiles(e.target.files)}
        />
        <p className="field-hint">
          Drag a photo here, or pick one. Uploading a photo the model has never
          seen is the proof this runs for real — nothing leaves your browser.
        </p>
      </div>

      {(uploadPreview || selectedSeed) && (
        <div className="image-preview">
          <img
            src={uploadPreview ?? selectedSeed?.file}
            alt={
              uploadPreview
                ? (value?.imageName ?? "uploaded photo")
                : (selectedSeed?.label ?? selectedSeed?.id ?? "selected photo")
            }
          />
          <span className="field-hint">
            {uploadPreview
              ? `Uploaded: ${value?.imageName ?? "your photo"}`
              : `Selected: ${selectedSeed?.label ?? selectedSeed?.id}`}
          </span>
          <button
            type="button"
            className="image-clear-btn"
            disabled={disabled}
            onClick={() => {
              setUploadPreview(null);
              if (inputRef.current) inputRef.current.value = "";
              onSelect(null);
            }}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
