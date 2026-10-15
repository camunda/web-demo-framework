import { useEffect, useState } from "react";
import {
  embedType,
  embedView,
  hasHostLink,
  isAutostart,
  isEmbed,
  parseRoute,
  type EmbedType,
  type EmbedView,
  type Route,
} from "./routing";

export interface RouteState {
  route: Route;
  embed: boolean;
  /** Only meaningful when `embed` is true. */
  view: EmbedView;
  /** `?type=redesign` — match the redesigned camunda.com's type. Only meaningful when `embed` is true. */
  type: EmbedType;
  /** `?autostart=1` — run once, unprompted, when the example comes into view. */
  autostart: boolean;
  /** `?hostlink=1` — the host links to the full page itself; don't repeat it. */
  hostLink: boolean;
}

function readState(): RouteState {
  return {
    route: parseRoute(),
    embed: isEmbed(),
    view: embedView(),
    type: embedType(),
    autostart: isAutostart(),
    hostLink: hasHostLink(),
  };
}

/**
 * Subscribes to the current route (path) and embed flag (query), re-rendering
 * on back/forward navigation or a client-side `navigate()` call (which
 * dispatches a synthetic `popstate`, see routing.ts).
 */
export function useRoute(): RouteState {
  const [state, setState] = useState<RouteState>(readState);

  useEffect(() => {
    const onPopState = () => setState(readState());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return state;
}
