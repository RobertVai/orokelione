import React from "react";
import styles from "./FlightSearch.module.css";

export default function FlightSearch() {
  return (
    <section className={styles.flightSearch}>
      <div className={styles.container}>
        <h2 className={styles.title}>Search your flight</h2>

        
        <nav className={styles.tabs} aria-label="Product">
          <button className={`${styles.tab} ${styles.tabActive}`} aria-current="page">
            <span className={styles.tabIcon} aria-hidden>✈</span>
            Flights
          </button>
          <button className={styles.tab}>
            <img className={styles.svg} src="/svg/car.svg" alt="" aria-hidden />
            Car rentals
          </button>
          <button className={styles.tab}>
            <img className={styles.svg} src="/svg/bed.svg" alt="" aria-hidden />
            Hotel
          </button>
        </nav>

        
        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <div className={styles.rowTop}>
            <label className={styles.inline}>
              <span className={styles.srOnly}>Trip type</span>
              <select className={styles.select}>
                <option>Round trip</option>
                <option>One way</option>
                <option>Multi-city</option>
              </select>
            </label>

            <label className={styles.inline}>
              <span className={styles.srOnly}>Travellers & class</span>
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
            <label className={styles.field}>
              <span className={styles.label}>From:</span>
              <input className={styles.input} type="text" placeholder="Vilnius (VNO)" />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>To:</span>
              <input className={styles.input} type="text" placeholder="ex. Riga (RIX)" />
            </label>

            <label className={`${styles.field} ${styles.fieldDate}`}>
              <span className={styles.label}>Date:</span>
              <input className={styles.input} type="text" placeholder="Departure — Arrival" />
            </label>

            <button className={styles.searchBtn} type="submit">Search flight</button>
          </div>
        </form>
      </div>
    </section>
  );
}