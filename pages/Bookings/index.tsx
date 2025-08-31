import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TicketCard from "@/components/TicketCard/TicketCard";
import { useBookings } from "@/contexts/BookingContext";
import styles from "./bookings.module.css";


export default function BookingsPage() {
  const { bookings, removeBooking, clearBookings } = useBookings();

  return (
    <div className={styles.pagewrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
        <Header />
        </div>
        <main className={styles.main}>
          <h1 className={styles.title}>My bookings</h1>

          {bookings.length === 0 ? (
            <p className={styles.empty}>No booked flights yet.</p>
          ) : (
            <>
              <div className={styles.actions}>
                <button className={styles.btn} onClick={clearBookings}>
                  Clear all
                </button>
              </div>

              {bookings.map((b) => (
                <div key={b.id} className={styles.bookingItem}>
                  <TicketCard
                    airline={b.airline}
                    warning={b.warning}
                    price={b.price}
                    segments={b.segments}
                  />
                  <button
                    className={`${styles.btn} ${styles.removeBtn}`}
                    onClick={() => removeBooking(b.id)}
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