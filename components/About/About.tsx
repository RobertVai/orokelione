import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
        <div className={styles.titleWrapper}> 
            <h2> About </h2>
        </div>

        <div className={styles.aboutWrapper}>
            <img src="./images/aboutus.jpg" alt="Flight plane" />

            <div className={styles.aboutInfo}>
               <p>  Orokelione.lt
            
            — is a flight tickets, car rentals, and hotels selling web page. Here you can
            easily input destination, dates, number of travelers, and specific preferences
            (e.g., direct flights only, business class, hotel star rating, car type).
          </p>
            </div>
        </div>
    </section>
  );
}