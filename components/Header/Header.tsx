import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.alert}>
        <b>ATTENTION! Brussels Airlines has warned passengers to expect strikes on May 20th and 22nd and affecting public transport... (more info)</b>
      </div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
            <div className={styles.emblem}>✈</div>
            <div className={styles.mainName}>orokelione.lt</div>
            </div>
        <nav className={styles.navLinks}>
          <a>Book flight</a>
          <a>Bookings</a>
          <a>FAQ</a>
          <a>Contact</a>
        </nav>
        <div className={styles.auth}>
          <span>EN▼</span>
          <span>Login 🔒</span>
        </div>
      </div>
    </header>
  );
}
