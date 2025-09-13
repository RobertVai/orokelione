import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandRow}>
          <div className={styles.logo}>
            <div className={styles.emblem}>✈</div>
            <div className={styles.mainName}>orokelione.lt</div>
          </div>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Corporate</h4>
            <ul>
              <li><Link href="/AboutUs">About us</Link></li>
              <li><Link href="/Partners">Partners</Link></li>
              <li><Link href="/ContactUs">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Partner services</h4>
            <ul>
              <li><Link href="https://www.booking.com/" target="_blank" rel="noopener noreferrer">Booking.com</Link></li>
              <li><Link href="https://www.hertz.com/rentacar/reservation/" target="_blank" rel="noopener noreferrer">HERTZ car rentals</Link></li>
              <li><Link href="https://www.rentalcars.com/" target="_blank" rel="noopener noreferrer">Rentalcars.com</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Discover</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/SearchTickets">Book flight</Link></li>
              <li><Link href="/Airlines">Airlines</Link></li>
              <li><Link href="/Bookings">Bookings</Link></li>
              <li><Link href="/FAQ">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.socials}>
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
};

export default Footer;