import React from 'react'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
    <div className={styles.contact}>
        <h2> Contact Us:</h2>
        <div className={styles.contactinfo}>
        <p>Adress: Konstitucijos ave. 26, Vilnius, Lithuania</p>
        <p>Postal code: LT-09582</p>
        <p>Office tel. +37050520565</p>
        <p>Office working hours: I-V, 8:00 - 17:00 (GMT +2)</p>
        </div>
        <div className={styles.contactlinks}>
        <p>Email: <b>info@orokelione.lt</b></p>
        <p>Customer support: <b>+37050520661</b> (24/7) </p>
        </div>


    </div>
    <div> <img src="./images/location.png" alt="Office location" /></div>
    </div>
  )
}
