import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import OurAirlines from "@/components/OurAirlines/OurAirlines";
import styles from "./airlines.module.css"

export default function AirlinesPage() {
  return (
    <div className={styles.pagewrapper}>
    <div className={styles.container}>
        <Header />
        <OurAirlines />
       
        

      
        
    </div>
    <Footer />
    </div>
  );
}