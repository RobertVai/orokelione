import React, { useState } from "react";
import styles from "./FlightSearch.module.css";

// Города с кодами
const cities = [
  { name: "Vilnius", code: "VNO" },
  { name: "Kaunas", code: "KUN" },
  { name: "Riga", code: "RIX" },
  { name: "London", code: "LHR" },
  { name: "Paris", code: "CDG" },
  { name: "Berlin", code: "BER" },
  { name: "Rome", code: "FCO" },
];

// Фейковые билеты (чтобы тестить фильтрацию)
const flights = [
  { from: "Vilnius (VNO)", to: "London (LHR)", date: "2025-09-10" },
  { from: "Kaunas (KUN)", to: "Paris (CDG)", date: "2025-09-12" },
  { from: "Riga (RIX)", to: "Berlin (BER)", date: "2025-09-15" },
  { from: "Vilnius (VNO)", to: "Rome (FCO)", date: "2025-09-20" },
  { from: "London (LHR)", to: "Vilnius (VNO)", date: "2025-09-25" },
];

export default function FlightSearch() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [results, setResults] = useState(flights);

  const [suggestionsFrom, setSuggestionsFrom] = useState<typeof cities>([]);
  const [suggestionsTo, setSuggestionsTo] = useState<typeof cities>([]);

  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFrom(value);
    setSuggestionsFrom(
      cities.filter((city) =>
        city.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTo(value);
    setSuggestionsTo(
      cities.filter((city) =>
        city.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = flights.filter((f) => {
      return (
        (!from || f.from.toLowerCase().includes(from.toLowerCase())) &&
        (!to || f.to.toLowerCase().includes(to.toLowerCase())) &&
        (!date || f.date === date)
      );
    });
    setResults(filtered);
  };

  return (
    <section className={styles.flightSearch}>
      <div className={styles.container}>
        <h2 className={styles.title}>Search your flight</h2>

        {/* Tabs */}
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

        {/* Form */}
        <form className={styles.form} onSubmit={handleSearch}>
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
            {/* From */}
            <label className={styles.field}>
              <span className={styles.label}>From:</span>
              <input
                className={styles.input}
                type="text"
                placeholder="Vilnius (VNO)"
                value={from}
                onChange={handleFromChange}
              />
              {suggestionsFrom.length > 0 && (
                <ul className={styles.suggestions}>
                  {suggestionsFrom.map((city, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setFrom(`${city.name} (${city.code})`);
                        setSuggestionsFrom([]);
                      }}
                    >
                      {city.name} ({city.code})
                    </li>
                  ))}
                </ul>
              )}
            </label>

            {/* To */}
            <label className={styles.field}>
              <span className={styles.label}>To:</span>
              <input
                className={styles.input}
                type="text"
                placeholder="ex. Riga (RIX)"
                value={to}
                onChange={handleToChange}
              />
              {suggestionsTo.length > 0 && (
                <ul className={styles.suggestions}>
                  {suggestionsTo.map((city, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setTo(`${city.name} (${city.code})`);
                        setSuggestionsTo([]);
                      }}
                    >
                      {city.name} ({city.code})
                    </li>
                  ))}
                </ul>
              )}
            </label>

            {/* Date */}
            <label className={`${styles.field} ${styles.fieldDate}`}>
              <span className={styles.label}>Date:</span>
              <input
                className={styles.input}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>

            <button className={styles.searchBtn} type="submit">
              Search flight
            </button>
          </div>
        </form>

        {/* Results */}
        <div className={styles.results}>
          <h3>Available flights</h3>
          {results.length > 0 ? (
            <ul>
              {results.map((f, i) => (
                <li key={i}>
                  {f.from} → {f.to} | {f.date}
                </li>
              ))}
            </ul>
          ) : (
            <p>No flights found.</p>
          )}
        </div>
      </div>
    </section>
  );
}