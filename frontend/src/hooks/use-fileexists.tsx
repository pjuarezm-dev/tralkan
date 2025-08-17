import { useEffect, useState } from "react";
import { getResizeHandleElementIndex } from "react-resizable-panels";

// Cache en memoria para evitar repetir HEAD al navegar entre componentes
const existsCache = new Map<string, boolean>();

export function useFileExists(url?: string | null) {
  const [exists, setExists] = useState<boolean>(false);

  useEffect(() => {
    if (!url) {
      setExists(false);
      return;
    }

    // Devuelve inmediato si ya está en caché
    if (existsCache.has(url)) {
      setExists(Boolean(existsCache.get(url)));
      return;
    }

    const ac = new AbortController();

    (async () => {
      try {
        const r = await fetch(url, { method: "HEAD", signal: ac.signal });
        const ok = r.ok && !r.headers.get("content-type")?.includes("text/html");
        existsCache.set(url, ok);
        setExists(ok);
      } catch {
        existsCache.set(url, false);
        setExists(false);
      }
    })();

    return () => ac.abort();
  }, [url]); 
  return exists;
}
