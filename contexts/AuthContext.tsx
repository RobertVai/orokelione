import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api"

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
        const r = await api("/api/auth/me");
        if (r.ok) {
          const data = await r.json();
          setUser(data.user || null);
        }
      } finally { setLoading(false); }
    })();
  }, []);

  async function login(email: string, password: string) {
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await r.json();
    if (!r.ok) return false;
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    setUser(data.user);
    return true;
  }

  async function register(name: string, email: string, password: string) {
    const r = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await r.json();
    if (!r.ok) return false;
    localStorage.setItem("access", data.access);
    localStorage.setItem("refresh", data.refresh);
    setUser(data.user);
    return true;
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
