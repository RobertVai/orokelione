import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TicketCard from "@/components/TicketCard/TicketCard";
import { useBookings } from "@/contexts/BookingContext";
import styles from './bookings.module.css'

export default function BookingsPage() {
  const { bookings, removeBooking, clearBookings } = useBookings();

  return (
    <div className={styles.pagewrapper}>
    <div className={styles.container}>
      <Header />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px 60px" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>My bookings</h1>

        {bookings.length === 0 ? (
          <p>No booked flights yet.</p>
        ) : (
          <>
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <button
                onClick={clearBookings}
                style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}
              >
                Clear all
              </button>
            </div>

            {bookings.map(b => (
              <div key={b.id} style={{ marginBottom: 16 }}>
                <TicketCard
                  airline={b.airline}
                  warning={b.warning}
                  price={b.price}
                  segments={b.segments}
                />
                <button
                  onClick={() => removeBooking(b.id)}
                  style={{ marginTop: 8, padding: "8px 12px", borderRadius: 8, border: "1px solid #e5e7eb", background: "#fff", cursor: "pointer" }}
                >
                  Remove
                </button>
              </div>
            ))}
          </>
          
        )}
      </main>
      
    </div>
    <Footer />
    </div>
  );
}