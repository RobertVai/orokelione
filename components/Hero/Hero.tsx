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
            <button className={styles.rent}> <img className={styles.svg} src="/svg/car.svg" alt="Car rent" /> Car rentals</button>
            <button className={styles.rent}> <img className={styles.svg} src="/svg/bed.svg" alt="Hotel rent" /> Hotel</button>
          </div>

          <form className={styles.searchForm}>
          <div className={styles.rowTop}>
            <label className={styles.inline}>
              <select className={styles.select}>
                <option>Round trip</option>
                <option>One way</option>
                <option>Multi-city</option>
              </select>
            </label>

            <label className={styles.inline}>
              
              <select className={styles.select}>
                <option>1 Traveller, Economy</option>
                <option>2 Travellers, Economy</option>
                <option>1 Traveller, Business</option>
              </select>
            </label>

            <label className={styles.checkbox}>
              <input type="checkbox" />
              <span>Direct flights only</span>
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
