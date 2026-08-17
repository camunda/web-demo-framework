import type { ReactNode } from "react";
import {
  Card,
  CardContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@camunda/design-system";
import { ChevronDown } from "lucide-react";
import { usePersistentDisclosure } from "./usePersistentDisclosure";

export interface CollapsibleCardProps {
  /**
   * Stable identifier for the section. Doubles as the `localStorage` key under
   * which this panel's open/closed state persists, so it must not change with
   * the panel's (possibly dynamic) title.
   */
  sectionId: string;
  /**
   * Panel heading. Rendered inside the disclosure trigger `<button>`, so it
   * must be phrasing (inline) content — block-level nodes would produce
   * invalid nesting.
   */
  title: ReactNode;
  /**
   * Optional sub-heading, also rendered inside the trigger `<button>`; phrasing
   * (inline) content only, for the same reason as `title`.
   */
  description?: ReactNode;
  /** Open state on a first-ever visit, before the reader has toggled it. */
  defaultOpen?: boolean;
  /** Extra classes; `panel` is always applied for the runner's grid layout. */
  className?: string;
  /** Guided-tour anchor, forwarded to the outer card so the step still resolves. */
  "data-tour"?: string;
  children: ReactNode;
}

/**
 * A `Card` whose body collapses behind its header, remembering the reader's
 * choice across reloads (see `usePersistentDisclosure`). Built from the design
 * system's `Collapsible` + `Card` primitives; the header is the disclosure
 * trigger, with a chevron that rotates on open via `[data-state]` in
 * `styles.css`.
 */
export function CollapsibleCard({
  sectionId,
  title,
  description,
  defaultOpen = true,
  className,
  children,
  ...rest
}: CollapsibleCardProps) {
  const [open, setOpen] = usePersistentDisclosure(sectionId, defaultOpen);

  return (
    <Card
      className={["panel", className].filter(Boolean).join(" ")}
      data-tour={rest["data-tour"]}
    >
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="panel-trigger">
          <span className="panel-trigger-text">
            <span className="panel-title">{title}</span>
            {description != null && (
              <span className="panel-desc">{description}</span>
            )}
          </span>
          <ChevronDown className="panel-chevron" aria-hidden />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>{children}</CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}
