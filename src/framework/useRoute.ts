import { useEffect, useState } from "react";
import {
  embedView,
  isEmbed,
  parseRoute,
  type EmbedView,
  type Route,
} from "./routing";

export interface RouteState {
  route: Route;
  embed: boolean;
  /** Only meaningful when `embed` is true. */
  view: EmbedView;
}

function readState(): RouteState {
  return { route: parseRoute(), embed: isEmbed(), view: embedView() };
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
