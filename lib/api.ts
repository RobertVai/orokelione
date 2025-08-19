const BASE = process.env.NEXT_PUBLIC_API_URL!;

function getAccess() { return localStorage.getItem("access"); }
function getRefresh() { return localStorage.getItem("refresh"); }

export async function api(path: string, opts: RequestInit = {}) {
  const headers = new Headers({ "Content-Type": "application/json" });
  const token = getAccess();
  if (token) headers.set("Authorization", `Bearer ${token}`);

  const res = await fetch(`${BASE}${path}`, { ...opts, headers });
  if (res.status !== 401) return res;

 
  const r = getRefresh();
  if (!r) return res;
  const rr = await fetch(`${BASE}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: r }),
  });
  if (!rr.ok) return res;
  const data = await rr.json();
  localStorage.setItem("access", data.access);
  localStorage.setItem("refresh", data.refresh);

  
  const h2 = new Headers(headers);
  h2.set("Authorization", `Bearer ${data.access}`);
  return fetch(`${BASE}${path}`, { ...opts, headers: h2 });
}