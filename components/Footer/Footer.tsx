import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

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
              <li>About us</li>
              <li>People</li>
              <li>Marketing projects</li>
              <li>Partners</li>
              <li>Newsletters</li>
              <li>Contact</li>
              <li>Login</li>
              <li>Why travel with us</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Partner services</h4>
            <ul>
              <li>Booking.com</li>
              <li>HERTZ car rentals</li>
              <li>Rentalcars.com</li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Discover</h4>
            <ul>
              <li>Book flight</li>
              <li>Airlines</li>
              <li>Airports</li>
              <li>Cheap flights</li>
              <li>Bookings</li>
              <li>FAQ</li>
              <li>Group booking</li>
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