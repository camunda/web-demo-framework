import type { ExampleMeta } from "../framework/types";

const REPO = "camunda/camunda-8-tutorials";

/**
 * `sourceUrl` and `saasImportUrl` for an example ported from
 * camunda-8-tutorials, built together so both always name the same folder.
 * `files` are paths under that folder's `models/`.
 */
export function tutorialLinks(
  folder: string,
  files: string[],
  title: string,
): Pick<ExampleMeta, "sourceUrl" | "saasImportUrl"> {
  const raw = files.map(
    (f) => `https://raw.githubusercontent.com/${REPO}/main/examples/${folder}/models/${f}`,
  );
  return {
    sourceUrl: `https://github.com/${REPO}/tree/main/examples/${folder}`,
    saasImportUrl: `https://modeler.cloud.camunda.io/import/resources?source=${raw.join(",")}&title=${encodeURIComponent(title)}`,
  };
}
