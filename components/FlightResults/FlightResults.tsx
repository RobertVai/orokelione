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

         

<TicketCard
  airline="Air Baltic"
  warning="Only 5 tickets left!"
  price="€ 79.99"
  segments={[
    { departTime:"17:20", arriveTime:"18:10", departCode:"VNO", arriveCode:"RIX", duration:"0h 50min", direct:true },
    { departTime:"20:10", arriveTime:"21:00", departCode:"RIX", arriveCode:"VNO", duration:"0h 50min", direct:true }
  ]}
/>
  <TicketCard
  airline="Air Baltic"
  warning="Only 5 tickets left!"
  price="€ 79.99"
  segments={[
    { departTime:"17:20", arriveTime:"18:10", departCode:"VNO", arriveCode:"RIX", duration:"0h 50min", direct:true },
    { departTime:"20:10", arriveTime:"21:00", departCode:"RIX", arriveCode:"VNO", duration:"0h 50min", direct:true }
  ]}
/>
<TicketCard
  airline="Air Baltic"
  warning="Only 5 tickets left!"
  price="€ 79.99"
  segments={[
    { departTime:"17:20", arriveTime:"18:10", departCode:"VNO", arriveCode:"RIX", duration:"0h 50min", direct:true },
    { departTime:"20:10", arriveTime:"21:00", departCode:"RIX", arriveCode:"VNO", duration:"0h 50min", direct:true }
  ]}
/>
<TicketCard
  airline="Air Baltic"
  warning="Only 5 tickets left!"
  price="€ 79.99"
  segments={[
    { departTime:"17:20", arriveTime:"18:10", departCode:"VNO", arriveCode:"RIX", duration:"0h 50min", direct:true },
    { departTime:"20:10", arriveTime:"21:00", departCode:"RIX", arriveCode:"VNO", duration:"0h 50min", direct:true }
  ]}
/>
           
          
        </div>
      </div>
    </section>
  );
}