import React, { useMemo, useState } from "react";
import styles from "./FlightResults.module.css";
import TicketCard from "../TicketCard/TicketCard";

export type Segment = {
  departTime: string;
  arriveTime: string;
  departCode: string;
  arriveCode: string;
  duration: string; 
  direct: boolean;
};

export type Ticket = {
  id?: string;
  from: string;
  to: string;
  date: string; 
  airline: string;
  price: string; 
  warning?: string;
  segments: Segment[];
};

type Props = { items?: Ticket[] };


const priceToNumber = (price: string): number => {
  const num = price.replace(/[^\d.,]/g, "").replace(",", ".");
  const n = parseFloat(num);
  return Number.isFinite(n) ? n : Number.POSITIVE_INFINITY;
};

const durationToMinutes = (d: string): number => {
  const h = /(\d+)\s*h/.exec(d)?.[1];
  const m = /(\d+)\s*min/.exec(d)?.[1];
  return (h ? parseInt(h, 10) : 0) * 60 + (m ? parseInt(m, 10) : 0);
};

const totalTripMinutes = (t: Ticket): number =>
  t.segments.reduce((sum, s) => sum + durationToMinutes(s.duration), 0);



export default function FlightResults({ items = [] }: Props) {
  const [sortBy, setSortBy] = useState<"cheapest" | "fastest" | "best">("cheapest");

  const sortedItems = useMemo(() => {
    const arr = [...items];
    const byPrice = (a: Ticket, b: Ticket) => priceToNumber(a.price) - priceToNumber(b.price);
    const bySpeed = (a: Ticket, b: Ticket) => totalTripMinutes(a) - totalTripMinutes(b);

    switch (sortBy) {
      case "fastest":
        arr.sort((a, b) => bySpeed(a, b) || byPrice(a, b));
        break;
      case "best":
       
        arr.sort((a, b) => byPrice(a, b) || bySpeed(a, b));
        break;
      default: 
        arr.sort((a, b) => byPrice(a, b) || bySpeed(a, b));
    }
    return arr;
  }, [items, sortBy]);

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


          <h3 className={styles.heading}>Baggage:</h3>
          <label><input type="checkbox" /> No baggage</label>
          <label><input type="checkbox" /> Cabin bag</label>
          <label><input type="checkbox" /> Checked in bag</label>
        </aside>

        <div className={styles.list}>
          <div className={styles.sort}>
            <label>
              Sort by:
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "cheapest" | "fastest" | "best")}
              >
                <option value="cheapest">Cheapest</option>
                <option value="fastest">Fastest</option>
                <option value="best">Best</option>
              </select>
            </label>
          </div>

          {sortedItems.length ? (
            sortedItems.map((t, i) => (
              <TicketCard
                key={t.id ?? `${t.airline}-${t.from}-${t.to}-${t.date}-${i}`}
                airline={t.airline}
                warning={t.warning}
                price={t.price}
                segments={t.segments}
              />
            ))
          ) : (
            <p>No flights found.</p>
          )}
        </div>
      </div>
    </section>
  );
}