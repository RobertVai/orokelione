import React from "react";
import styles from "./OurAirlines.module.css";

type Airline = {
  name: string;
  description: string;
  logo: string;
  url: string;
};

const AIRLINES: Airline[] = [
  {
    name: "Air Baltic",
    description: "Latvia’s national carrier, offering direct flights across Europe with a focus on the Baltics.",
    logo: "/images/airlines/airbaltic.png",
    url: "https://www.airbaltic.com",
  },
  {
    name: "LOT Polish Airlines",
    description: "Poland’s flagship airline, connecting Central Europe with destinations worldwide.",
    logo: "/images/airlines/lot.png",
    url: "https://www.lot.com",
  },
  {
    name: "Lufthansa",
    description: "Germany’s largest airline, part of Star Alliance, known for extensive global routes.",
    logo: "/images/airlines/lufthansa.jpg",
    url: "https://www.lufthansa.com",
  },
  {
    name: "Turkish Airlines",
    description: "National flag carrier of Turkey, flying to more countries than any other airline.",
    logo: "/images/airlines/turkishairlines.png",
    url: "https://www.turkishairlines.com",
  },
  {
    name: "ITA Airways",
    description: "Italy airlines, with extensive transatlantic routes.",
    logo: "/images/airlines/ita.png",
    url: "https://www.aa.com",
  },
];

export default function OurAirlines() {
  return (
    <section className={styles.airlines}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Partner Airlines</h1>
        <p className={styles.subtitle}>
          We cooperate with trusted airlines to provide you with safe and convenient flights worldwide.
        </p>

        <div className={styles.grid}>
          {AIRLINES.map((a) => (
            <a
              key={a.name}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src={a.logo} alt={a.name} className={styles.logo} />
              <h3>{a.name}</h3>
              <p>{a.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}