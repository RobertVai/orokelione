import React from "react";
import styles from "./OurPartners.module.css";

type Partner = {
  name: string;
  description: string;
  logo: string;
  url: string;
};

const PARTNERS: Partner[] = [
  {
    name: "Booking.com",
    description:
      "Worldwide hotel booking platform offering thousands of accommodations with competitive rates and user reviews.",
    logo: "/images/booking.jpg", 
    url: "https://www.booking.com",
  },
  {
    name: "Rentalcars.com",
    description:
      "Global car rental booking service with a wide selection of cars, flexible conditions and support in multiple languages.",
    logo: "/images/rentalcars.png",
    url: "https://www.rentalcars.com",
  },
  {
    name: "HERTZ Car Rental",
    description:
      "Trusted car rental company with offices in over 150 countries, offering premium and economy vehicles.",
    logo: "/images/hertzcars.jpg",
    url: "https://www.hertz.com",
  },
];

export default function OurPartners() {
  return (
    <section className={styles.partners}>
      <div className={styles.container}>
        <h1 className={styles.title}>Our Partners</h1>
        <p className={styles.subtitle}>
          We work with trusted companies to ensure the best travel experience for you.
        </p>

        <div className={styles.grid}>
          {PARTNERS.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <img src={p.logo} alt={p.name} className={styles.logo} />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}