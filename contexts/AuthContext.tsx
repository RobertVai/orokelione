import React, { createContext, useContext, useEffect, useState } from "react";
import { api, apiJson } from "@/lib/api";

type User = { id: string; name: string; email: string } | null;
type Ctx = {
  user: User; loading: boolean;
  login(email: string, password: string): Promise<boolean>;
  register(name: string, email: string, password: string): Promise<boolean>;
  logout(): void;
};
const AuthCtx = createContext<Ctx>({} as any);
export const useAuth = () => useContext(AuthCtx);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const access = typeof window !== "undefined" ? localStorage.getItem("access") : null;
        if (!access) { setLoading(false); return; }              

        const r = await api("/api/auth/me");
        if (!r.ok) {
          
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          setUser(null);
        } else {
          const data = await r.json();
          setUser(data.user || null);
        }
      } catch {
        
        setUser(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function login(email: string, password: string) {
    try {
      const data = await apiJson<{ access: string; refresh: string; user: User }>(
        "/api/auth/login",
        { method: "POST", body: JSON.stringify({ email, password }) }
      );
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      setUser(data.user);
      return true;
    } catch {
      return false;
    }
  }

  async function register(name: string, email: string, password: string) {
    try {
      const data = await apiJson<{ access: string; refresh: string; user: User }>(
        "/api/auth/register",
        { method: "POST", body: JSON.stringify({ name, email, password }) }
      );
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      setUser(data.user);
      return true;
    } catch (e: any) {
      
      return false;
    }
  }

  function logout() {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setUser(null);
  }

  return (
    <AuthCtx.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}