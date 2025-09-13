import { useMemo, useState } from "react";
import styles from "@/components/Hero/Hero.module.css";
import Link from "next/link";


const AIRPORTS = [
  { city: "Vilnius", code: "VNO" },
  { city: "Riga", code: "RIX" },
  { city: "Warsaw", code: "WAW" },
  { city: "Tallinn", code: "TLL" },
  { city: "Kaunas", code: "KUN" },
  { city: "London", code: "LHR" },
  { city: "Paris", code: "CDG" },
];

export default function Hero() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState<string>("");
  const [returnDate, setReturnDate] = useState<string>("");

  const airportOptions = useMemo(
    () =>
      AIRPORTS.map((a) => ({
        value: `${a.city} (${a.code})`,
      })),
    []
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    console.log({ from, to, dates: { depart, return: returnDate } });
  }

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <h4 className={styles.title}>Make Memories Worldwide.</h4>
          <div className={styles.contentBox}>
            <div className={styles.navTabs}>
              <button className={styles.activeTab}>✈ Flights</button>
              <button className={styles.rent}>
                <img className={styles.svg} src="/svg/car.svg" alt="Car rent" /> Car rentals
              </button>
              <button className={styles.rent}>
                <img className={styles.svg} src="/svg/bed.svg" alt="Hotel rent" /> Hotel
              </button>
            </div>

            <form className={styles.searchForm} onSubmit={onSubmit}>
              <div className={styles.rowTop}>
                <label className={styles.inline}>
                  <select className={styles.select} defaultValue="Round trip">
                    <option>Round trip</option>
                    <option>One way</option>
                    <option>Multi-city</option>
                  </select>
                </label>

                <label className={styles.inline}>
                  <select className={styles.select} defaultValue="1 Traveller, Economy">
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
                  <input
                    type="text"
                    placeholder="Vilnius (VNO)"
                    list="airports"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>To:</label>
                  <input
                    type="text"
                    placeholder="ex. Riga (RIX)"
                    list="airports"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Date:</label>
                  
                  <input
                    type="date"
                    value={depart}
                    onChange={(e) => setDepart(e.target.value)}
                    aria-label="Departure date"
                  />
              
                </div>

               <Link href="/SearchTickets"> <button className={styles.searchButton} type="submit">
                  Search flight
                </button></Link>
              </div>

              
              <datalist id="airports">
                {airportOptions.map((o) => (
                  <option key={o.value} value={o.value} />
                ))}
              </datalist>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
