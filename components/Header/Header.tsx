import styles from "../Header/Header.module.css";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext"; 
export default function Header() {
  const { user, logout } = useAuth();
  const firstName = user?.name?.split(" ")?.[0] || user?.name || "";

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <div className={styles.emblem}>✈</div>
          <div className={styles.mainName}>orokelione.lt</div>
        </div>

        <nav className={styles.navLinks}>
          <Link href="/SearchTickets">Book flight</Link>
          <Link href="/Bookings">Bookings</Link>
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
      </div>
    </header>
  );
}