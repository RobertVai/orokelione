import React from "react";
import styles from "./FlightResults.module.css";

export default function FlightResults() {
  return (
    <section className={styles.results}>
      <div className={styles.container}>
        
        <aside className={styles.sidebar}>
          <h3 className={styles.heading}>Stops:</h3>
          <label><input type="checkbox" defaultChecked /> Direct flights only</label>
          <label><input type="checkbox" /> 1 Stop</label>
          <label><input type="checkbox" /> 2+ Stops</label>

          <h3 className={styles.heading}>Airlines:</h3>
          <label><input type="checkbox" defaultChecked /> Air Baltic</label>
          <label><input type="checkbox" /> American Airlines</label>
          <label><input type="checkbox" /> LOT</label>
          <label><input type="checkbox" /> Lufthansa</label>
          <label><input type="checkbox" /> Turkish Airlines</label>

          <h3 className={styles.heading}>Outbound flight:</h3>
          <label>Departure time: <input type="time" /></label>
          <label>Arrival time: <input type="time" /></label>

          <h3 className={styles.heading}>Inbound flight:</h3>
          <label>Departure time: <input type="time" /></label>
          <label>Arrival time: <input type="time" /></label>

          <h3 className={styles.heading}>Baggage:</h3>
          <label><input type="checkbox" /> No baggage</label>
          <label><input type="checkbox" /> Cabin bag</label>
          <label><input type="checkbox" /> Checked in bag</label>
        </aside>

        
        <div className={styles.list}>
          <div className={styles.sort}>
            <label>
              Sort by:
              <select>
                <option>Cheapest</option>
                <option>Fastest</option>
                <option>Best</option>
              </select>
            </label>
          </div>

         
          <div className={styles.card}>
            <div className={styles.info}>
              <h4 className={styles.airline}>Air Baltic</h4>
              <p>17:20 VNO → 18:10 RIX <span className={styles.direct}>Direct</span></p>
              <p>20:10 RIX → 21:00 VNO <span className={styles.direct}>Direct</span></p>
            </div>
            <div className={styles.priceBox}>
              <p className={styles.warning}>Only 5 tickets left!</p>
              <p className={styles.price}>€ 79.99</p>
              <button className={styles.book}>Book</button>
              <button className={styles.details}>Flight details</button>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.info}>
              <h4 className={styles.airline}>Air Baltic</h4>
              <p>14:40 VNO → 15:30 RIX <span className={styles.direct}>Direct</span></p>
              <p>20:10 RIX → 21:00 VNO <span className={styles.direct}>Direct</span></p>
            </div>
            <div className={styles.priceBox}>
              <p className={styles.warning}>Only 2 tickets left!</p>
              <p className={styles.price}>€ 81.99</p>
              <button className={styles.book}>Book</button>
              <button className={styles.details}>Flight details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}