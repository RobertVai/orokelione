import React, { createContext, useContext, useEffect, useState } from "react";

export type Segment = {
  departTime: string;
  arriveTime: string;
  departCode: string;
  arriveCode: string;
  duration: string;
  direct: boolean;
};

export type Booking = {
  id: string;           
  airline: string;
  price: string;        
  warning?: string;
  segments: Segment[];
  bookedAt: number;     
};

type Ctx = {
  bookings: Booking[];
  addBooking: (b: Omit<Booking, "id" | "bookedAt">) => void;
  removeBooking: (id: string) => void;
  clearBookings: () => void;
};

const BookingsCtx = createContext<Ctx | null>(null);
export const useBookings = () => {
  const v = useContext(BookingsCtx);
  if (!v) throw new Error("useBookings must be used within <BookingsProvider>");
  return v;
};

const KEY = "orokelione_bookings";

export function BookingsProvider({ children }: { children: React.ReactNode }) {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setBookings(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(bookings));
    } catch {}
  }, [bookings]);

  function addBooking(b: Omit<Booking, "id" | "bookedAt">) {
    const id = crypto?.randomUUID?.() ?? String(Date.now() + Math.random());
    setBookings(prev => [{ ...b, id, bookedAt: Date.now() }, ...prev]);
  }
  function removeBooking(id: string) {
    setBookings(prev => prev.filter(x => x.id !== id));
  }
  function clearBookings() {
    setBookings([]);
  }

  return (
    <BookingsCtx.Provider value={{ bookings, addBooking, removeBooking, clearBookings }}>
      {children}
    </BookingsCtx.Provider>
  );
}