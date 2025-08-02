import styles from "@/components/Hero/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h4 className={styles.title}>Make Memories Worldwide.</h4>
            <div className={styles.contentBox}>
          <div className={styles.navTabs}>
            <button className={styles.activeTab}>✈ Flights</button>
            <button>🚗 Car rentals</button>
            <button>🏨 Hotel</button>
          </div>

          <form className={styles.searchForm}>
            <div className={styles.rowTop}>
              <span>Round trip ▼</span>
              <span>1 Traveller, Economy ⚙</span>
              <label>
                <input type="checkbox" /> Direct flights only
              </label>
            </div>

            <div className={styles.rowBottom}>
              <div className={styles.inputGroup}>
                <label>From:</label>
                <input type="text" placeholder="Vilnius (VNO)" />
              </div>
              <div className={styles.inputGroup}>
                <label>To:</label>
                <input type="text" placeholder="ex. Riga (RIX)" />
              </div>
              <div className={styles.inputGroup}>
                <label>Date:</label>
                <input type="text" placeholder="Departure - Arrival" />
              </div>
              <button className={styles.searchButton}>Search flight</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  );
}
