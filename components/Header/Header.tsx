import { useState } from "react";
import styles from "../Header/Header.module.css";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { useBookings } from "@/contexts/BookingContext";

export default function Header() {
  const { user, logout } = useAuth();
  const firstName = user?.name?.split(" ")?.[0] || user?.name || "";
  const [open, setOpen] = useState(false);
  const { bookings } = useBookings();

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.emblem}>✈</div>
          <div className={styles.mainName}><Link href="/">orokelione.lt</Link></div>
        </div>

       
        <nav className={styles.navLinks}>
          <Link href="/SearchTickets">Book flight</Link>

          
<Link href="/Bookings" className={styles.bookingsLink}>
  Bookings <span id="bookings-badge" className={styles.badge}>{bookings.length}</span>
</Link>

          <Link href="/FAQ">FAQ</Link>
          <Link href="/ContactUs">Contact</Link>
        </nav>

       
        <div className={styles.auth}>
          {!user ? (
            <>
              <Link href="/Register" className={styles.login}>
                <img className={styles.svg} src="/svg/airplane.svg" alt="" aria-hidden /> Register
              </Link>
              <Link href="/Login" className={styles.login}>
                <img className={styles.svg} src="/svg/person.svg" alt="" aria-hidden /> Login
              </Link>
            </>
          ) : (
            <div className={styles.userBox}>
              <span className={styles.hello}>Hello, {firstName || user.name}</span>
              <button className={styles.logout} onClick={logout}>Logout</button>
            </div>
          )}
        </div>

        
        <button
          className={styles.burgerBtn}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

    
      <div
        className={`${styles.burgerBackdrop} ${open ? styles.show : ""}`}
        onClick={() => setOpen(false)}
      />

     
      <nav className={`${styles.burgerMenu} ${open ? styles.show : ""}`}>
        <Link href="/SearchTickets" onClick={() => setOpen(false)}>Book flight</Link>

        
        <Link href="/Bookings" onClick={() => setOpen(false)}>
          Bookings
          
        </Link>

        <Link href="/FAQ" onClick={() => setOpen(false)}>FAQ</Link>
        <Link href="/ContactUs" onClick={() => setOpen(false)}>Contact</Link>

        <div className={styles.burgerAuth}>
          {!user ? (
            <>
              <Link href="/Register" onClick={() => setOpen(false)} aria-label="Register">
                <img className={styles.svg} src="/svg/airplane.svg" alt="" />
              </Link>
              <Link href="/Login" onClick={() => setOpen(false)} aria-label="Login">
                <img className={styles.svg} src="/svg/person.svg" alt="" />
              </Link>
            </>
          ) : (
            <>
              <span className={styles.hello}>Hello, {firstName || user.name}</span>
              <button className={styles.logout} onClick={() => { logout(); setOpen(false); }}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}