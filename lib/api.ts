const RAW_BASE = (process.env.NEXT_PUBLIC_API_URL as string) || "";
const BASE = RAW_BASE.replace(/\/+$/, "");

function safeGet(key: string) {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function safeSet(key: string, value: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {}
}

function getAccess() { return safeGet("access"); }
function getRefresh() { return safeGet("refresh"); }

let refreshInFlight: Promise<{ access: string; refresh?: string } | null> | null = null;

function join(base: string, p: string) {
  const path = p.startsWith("/") ? p : `/${p}`;
  return `${base}${path}`;
}

function isFormData(body: unknown): body is FormData {
  return typeof FormData !== "undefined" && body instanceof FormData;
}
function isPlainString(body: unknown): body is string {
  return typeof body === "string";
}

async function refreshToken() {
  if (refreshInFlight) return refreshInFlight;

  const r = getRefresh();
  if (!r) return null;

  refreshInFlight = (async () => {
    try {
      const res = await fetch(join(BASE, "/api/auth/refresh"), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: r }),
      });
      if (!res.ok) return null;
      const data = (await res.json()) as { access: string; refresh?: string };
      if (data.access) safeSet("access", data.access);
      if (data.refresh) safeSet("refresh", data.refresh);
      return data;
    } catch {
      return null;
    }
  })();

  try {
    return await refreshInFlight;
  } finally {
    refreshInFlight = null;
  }
}

export async function api(path: string, opts: RequestInit = {}) {
  if (!BASE && process.env.NODE_ENV !== "production") {
    console.warn("NEXT_PUBLIC_API_URL is not set");
  }

  const url = join(BASE, path);
  const headers = new Headers(opts.headers || {});
  const hasBody = typeof opts.body !== "undefined";

  if (hasBody && !headers.has("Content-Type") && !isFormData(opts.body) && isPlainString(opts.body)) {
    headers.set("Content-Type", "application/json");
  }

  const token = getAccess();
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(url, { ...opts, headers });

  if (res.status !== 401) return res;
  if (path.includes("/api/auth/refresh")) return res;

  const refreshed = await refreshToken();
  if (!refreshed?.access) return res;

  const h2 = new Headers(headers);
  h2.set("Authorization", `Bearer ${refreshed.access}`);
  return fetch(url, { ...opts, headers: h2 });
}

export async function apiJson<T = unknown>(path: string, opts: RequestInit = {}) {
  const res = await api(path, opts);
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${res.status} ${res.statusText} – ${text}`);
  }
  if (res.status === 204) return null as unknown as T;
  return (await res.json()) as T;
}