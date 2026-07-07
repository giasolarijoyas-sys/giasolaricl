// Favoritas: manejo liviano en localStorage. Sin backend.

const KEY = "gs_favoritas_v1";
const EVENT = "gs:favoritas-changed";

function read(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr.filter((s) => typeof s === "string") : [];
  } catch {
    return [];
  }
}

function write(slugs: string[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(slugs));
    window.dispatchEvent(new CustomEvent(EVENT));
  } catch {
    /* noop */
  }
}

export function getFavoritas(): string[] {
  return read();
}

export function isFavorita(slug: string): boolean {
  return read().includes(slug);
}

export function toggleFavorita(slug: string): boolean {
  const list = read();
  const idx = list.indexOf(slug);
  if (idx >= 0) {
    list.splice(idx, 1);
    write(list);
    return false;
  }
  list.push(slug);
  write(list);
  return true;
}

export function subscribeFavoritas(cb: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = () => cb();
  window.addEventListener(EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}
