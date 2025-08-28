import React from "react";
import styles from "./FlightResults.module.css";
import TicketCard from "../TicketCard/TicketCard";

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
          <label><input type="checkbox" /> Air France</label>
          <label><input type="checkbox" /> Lufthansa</label>
          <label><input type="checkbox" /> ITA Airways</label>
          <label><input type="checkbox" /> LOT</label>

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

          {/* 1. Vilnius (VNO) → London (LHR) */}
          <TicketCard
            airline="Air Baltic"
            warning="Only 5 tickets left!"
            price="€ 79.99"
            segments={[
              { departTime: "09:15", arriveTime: "12:15", departCode: "VNO", arriveCode: "LHR", duration: "3h 00min", direct: true },
              { departTime: "18:30", arriveTime: "22:00", departCode: "LHR", arriveCode: "VNO", duration: "3h 30min", direct: true }
            ]}
          />

          {/* 2. Kaunas (KUN) → Paris (CDG) */}
          <TicketCard
            airline="Air France"
            warning="Only 2 tickets left!"
            price="€ 81.99"
            segments={[
              { departTime: "07:40", arriveTime: "09:50", departCode: "KUN", arriveCode: "CDG", duration: "2h 10min", direct: true },
              { departTime: "20:20", arriveTime: "22:30", departCode: "CDG", arriveCode: "KUN", duration: "2h 10min", direct: true }
            ]}
          />

          {/* 3. Riga (RIX) → Berlin (BER) */}
          <TicketCard
            airline="Lufthansa"
            warning="Only 5 tickets left!"
            price="€ 97.99"
            segments={[
              { departTime: "12:00", arriveTime: "13:40", departCode: "RIX", arriveCode: "BER", duration: "1h 40min", direct: true },
              { departTime: "17:10", arriveTime: "18:50", departCode: "BER", arriveCode: "RIX", duration: "1h 40min", direct: true }
            ]}
          />

          {/* 4. Vilnius (VNO) → Rome (FCO) */}
          <TicketCard
            airline="ITA Airways"
            warning="Only 3 tickets left!"
            price="€ 89.99"
            segments={[
              { departTime: "06:30", arriveTime: "08:55", departCode: "VNO", arriveCode: "FCO", duration: "2h 25min", direct: true },
              { departTime: "21:15", arriveTime: "23:40", departCode: "FCO", arriveCode: "VNO", duration: "2h 25min", direct: true }
            ]}
          />
        </div>
      </div>
    </section>
  );
}