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
              <li><Link href="/SearchTickets">Partners</Link></li>
              <li><Link href="/SearchTickets">Contact</Link></li>
              <li><Link href="/SearchTickets">Why travel with us</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Partner services</h4>
            <ul>
              <li><Link href="/SearchTickets">Booking.com</Link></li>
              <li><Link href="/SearchTickets">HERTZ car rentals</Link></li>
              <li><Link href="/SearchTickets">Rentalcars.com</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Discover</h4>
            <ul>
              <li><Link href="/SearchTickets">Book flight</Link></li>
              <li><Link href="/SearchTickets">Airlines</Link></li>
              <li><Link href="/SearchTickets">Cheap flights</Link></li>
              <li><Link href="/SearchTickets">Bookings</Link></li>
              <li><Link href="/SearchTickets">FAQ</Link></li>
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