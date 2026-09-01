import agentIconUrl from "./icons/task-agent.svg";
import graphqlIconUrl from "./icons/graphql.svg";
import jdbcIconUrl from "./icons/jdbc.svg";
import restIconUrl from "./icons/rest.svg";

/**
 * Reproduces the iconography Camunda Modeler derives from connector element
 * templates, so a model reads the same here as it does in the tutorial it came
 * from (see camunda/seed-export-compliance-agent-demo#10).
 *
 * Keyed on the element's `zeebe:modelerTemplate` rather than its id: the ids in
 * that demo are specific to one process, but the template ids are the connector
 * identity itself, so every example picks up the right icon with nothing to
 * declare in its manifest.
 *
 * Presentation only. The overlays never touch the model, so nano keeps
 * executing the example's local handlers rather than any connector runtime.
 */
interface TemplateIcon {
  url: string;
  /**
   * Hide bpmn-js's built-in task-type marker underneath. The agent's icon sits
   * on an ad-hoc sub-process, which has no marker to displace.
   */
  replacesServiceMarker: boolean;
}

const TEMPLATE_ICONS: Record<string, TemplateIcon> = {
  "io.camunda.connectors.agenticai.aiagent.jobworker.v1": {
    url: agentIconUrl,
    replacesServiceMarker: false,
  },
  "io.camunda.connectors.Jdbc.v1": { url: jdbcIconUrl, replacesServiceMarker: true },
  "io.camunda.connectors.GraphQL.v1": {
    url: graphqlIconUrl,
    replacesServiceMarker: true,
  },
  "io.camunda.connectors.HttpJson.v2": { url: restIconUrl, replacesServiceMarker: true },
};

/**
 * The same identities by their runtime name. An example that wires a connector
 * (or the AI agent) by job type alone carries no `modelerTemplate`, but the job
 * type names the very same thing — so `loan-origination`'s agent gets the agent
 * icon without its model being edited.
 *
 * Only official `io.camunda:*` job types appear here. A domain job type like
 * `charge-payment` says nothing about *how* the work is done, so there is
 * nothing to derive an icon from and bpmn-js's default marker stands.
 */
const JOB_TYPE_ICONS: Record<string, TemplateIcon> = {
  "io.camunda.agenticai:aiagent-job-worker:1": {
    url: agentIconUrl,
    replacesServiceMarker: false,
  },
  "io.camunda:connector-jdbc:1": { url: jdbcIconUrl, replacesServiceMarker: true },
  "io.camunda:connector-graphql:1": { url: graphqlIconUrl, replacesServiceMarker: true },
  "io.camunda:http-json:1": { url: restIconUrl, replacesServiceMarker: true },
};

export interface DiagramIcon extends TemplateIcon {
  elementId: string;
}

/** Modeler renders these at 18×18, inset 5px from the task's top-left corner. */
const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
const ICON_SIZE = "18";
const ICON_INSET = "5";

const ZEEBE_NS = "http://camunda.org/schema/zeebe/1.0";

/** Direct children matching a local name, ignoring namespace prefix. */
function childrenNamed(el: Element, localName: string): Element[] {
  return Array.from(el.children).filter((c) => c.localName === localName);
}

/**
 * This element's own `zeebe:taskDefinition` type. Deliberately not a descendant
 * lookup: an ad-hoc sub-process contains the service tasks it can call, so
 * `querySelector` would return a child's job type as if it were the parent's.
 */
function ownJobType(el: Element): string | null {
  for (const ext of childrenNamed(el, "extensionElements")) {
    for (const def of childrenNamed(ext, "taskDefinition")) {
      const type = def.getAttribute("type");
      if (type) return type;
    }
  }
  return null;
}

/** Every element in `xml` whose connector identity we have an icon for. */
export function diagramIconsFor(xml: string): DiagramIcon[] {
  let doc: Document;
  try {
    doc = new DOMParser().parseFromString(xml, "text/xml");
  } catch {
    return [];
  }
  if (doc.querySelector("parsererror")) return [];

  const icons: DiagramIcon[] = [];
  // Read by namespace, not `querySelectorAll("[modelerTemplate]")`: the
  // attribute's qualified name is `zeebe:modelerTemplate`, and a CSS attribute
  // selector in an XML document matches the qualified name, never the local one.
  for (const el of Array.from(doc.getElementsByTagName("*"))) {
    const elementId = el.getAttribute("id");
    if (!elementId) continue;

    const template =
      el.getAttributeNS(ZEEBE_NS, "modelerTemplate") ??
      el.getAttribute("zeebe:modelerTemplate");
    const jobType = ownJobType(el);
    const icon =
      (template ? TEMPLATE_ICONS[template] : undefined) ??
      (jobType ? JOB_TYPE_ICONS[jobType] : undefined);

    if (icon) icons.push({ elementId, ...icon });
  }
  return icons;
}

/**
 * Appends the icons to the rendered SVG. Idempotent, so it can be re-run
 * whenever bpmn-js redraws without stacking duplicates.
 */
export function installDiagramIcons(
  container: HTMLElement,
  icons: readonly DiagramIcon[],
): void {
  for (const icon of icons) {
    const element = container.querySelector<SVGGElement>(
      `.djs-element[data-element-id="${CSS.escape(icon.elementId)}"]`,
    );
    const visual = element?.querySelector<SVGGElement>(".djs-visual");
    if (!element || !visual || visual.querySelector(".diagram-modeler-icon")) continue;

    if (icon.replacesServiceMarker) element.classList.add("diagram-service-icon");

    const image = document.createElementNS(SVG_NAMESPACE, "image");
    image.classList.add("diagram-modeler-icon");
    image.setAttribute("href", icon.url);
    image.setAttribute("x", ICON_INSET);
    image.setAttribute("y", ICON_INSET);
    image.setAttribute("width", ICON_SIZE);
    image.setAttribute("height", ICON_SIZE);
    image.setAttribute("aria-hidden", "true");
    visual.append(image);
  }
}
