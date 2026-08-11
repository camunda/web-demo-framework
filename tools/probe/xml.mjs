// A minimal, dependency-free XML tree parser for the probe script.
//
// Node has no built-in DOMParser (that's a browser API — src/framework/model.ts
// uses it, this script can't). Rather than pull in a real XML library for a
// probe tool, this hand-rolls a small stack-based tag parser sufficient for
// well-formed BPMN/DMN documents: attribute values here are always properly
// entity-escaped (`&#10;`, `&#34;`, `&#62;`, …), so a literal `<`/`>` never
// appears inside a tag, which is what keeps a scanner like this correct.
//
// A parsed node is `{ name, attrs, children, parent, text }`, where `name` is
// the raw tag name including its namespace prefix (e.g. `"zeebe:taskDefinition"`).
// This script only ever needs prefix-based matching (`bpmn:`, `zeebe:`), not
// real namespace resolution, so that's all it provides.

function decodeEntities(s) {
  return s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

/** Parse an XML string into a tree rooted at a synthetic `#root` node. */
export function parseXml(xml) {
  const root = { name: "#root", attrs: {}, children: [], parent: null, text: "" };
  let current = root;
  let i = 0;
  const len = xml.length;

  while (i < len) {
    const lt = xml.indexOf("<", i);
    if (lt === -1) break;

    const text = xml.slice(i, lt);
    if (text) current.text += decodeEntities(text);

    if (xml.startsWith("<!--", lt)) {
      const end = xml.indexOf("-->", lt);
      i = end === -1 ? len : end + 3;
      continue;
    }
    if (xml.startsWith("<![CDATA[", lt)) {
      const end = xml.indexOf("]]>", lt);
      current.text += xml.slice(lt + 9, end === -1 ? len : end);
      i = end === -1 ? len : end + 3;
      continue;
    }
    if (xml.startsWith("<?", lt)) {
      const end = xml.indexOf("?>", lt);
      i = end === -1 ? len : end + 2;
      continue;
    }
    if (xml.startsWith("<!", lt)) {
      const end = xml.indexOf(">", lt);
      i = end === -1 ? len : end + 1;
      continue;
    }

    const gt = xml.indexOf(">", lt);
    if (gt === -1) break;
    const tagContent = xml.slice(lt + 1, gt);
    i = gt + 1;

    if (tagContent.startsWith("/")) {
      const closeName = tagContent.slice(1).trim();
      let node = current;
      while (node && node.name !== closeName) node = node.parent;
      current = node ? (node.parent ?? root) : current;
      continue;
    }

    const selfClosing = tagContent.endsWith("/");
    const body = selfClosing ? tagContent.slice(0, -1) : tagContent;
    const nameMatch = body.match(/^([A-Za-z_][\w:.-]*)/);
    if (!nameMatch) continue;
    const name = nameMatch[1];
    const attrsStr = body.slice(name.length);
    const attrs = {};
    const attrRe = /([A-Za-z_][\w:.-]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g;
    let m;
    while ((m = attrRe.exec(attrsStr))) {
      attrs[m[1]] = decodeEntities(m[2] ?? m[3] ?? "");
    }

    const node = { name, attrs, children: [], parent: current, text: "" };
    current.children.push(node);
    if (!selfClosing) current = node;
  }

  return root;
}

/** The tag name without its namespace prefix (`"zeebe:taskDefinition"` → `"taskDefinition"`). */
export function localName(node) {
  const idx = node.name.indexOf(":");
  return idx === -1 ? node.name : node.name.slice(idx + 1);
}

/** The tag's namespace prefix (`"zeebe:taskDefinition"` → `"zeebe"`), or `""` for none. */
export function prefix(node) {
  const idx = node.name.indexOf(":");
  return idx === -1 ? "" : node.name.slice(0, idx);
}

/**
 * Depth-first search for every `bpmn:`-prefixed node whose local name is in
 * `names`. Scoped to the `bpmn:` prefix deliberately: several tag names are
 * reused across namespaces with a different meaning (e.g. `zeebe:userTask` —
 * the marker extension inside a `bpmn:userTask`'s `extensionElements` — shares
 * its local name `userTask` with the BPMN element itself), so an unscoped
 * local-name search would double-count them.
 */
export function findAll(root, names, acc = [], set = Array.isArray(names) ? new Set(names) : new Set([names])) {
  for (const child of root.children) {
    if (prefix(child) === "bpmn" && set.has(localName(child))) acc.push(child);
    findAll(child, names, acc, set);
  }
  return acc;
}

/** The first direct child whose local name is `name`, if any. */
export function directChild(node, name) {
  return node.children.find((c) => localName(c) === name) ?? null;
}

/** Every direct child whose local name is `name`. */
export function directChildren(node, name) {
  return node.children.filter((c) => localName(c) === name);
}

/**
 * The nearest ancestor that carries an `id` and isn't itself an
 * `extensionElements` wrapper — the BPMN element "owning" some nested
 * extension/definition node.
 */
export function nearestOwner(node) {
  let cur = node.parent;
  while (cur) {
    if (cur.attrs.id && localName(cur) !== "extensionElements") return cur;
    cur = cur.parent;
  }
  return null;
}
