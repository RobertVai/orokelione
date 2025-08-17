import styles from "../Header/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

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
          <span className={styles.rent}> <img className={styles.svg} src="/svg/person.svg" alt="Login" /> Login</span>
        </div>
      </div>
    </header>
  );
}
