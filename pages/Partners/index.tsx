import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import OurPartners from "@/components/OurPartners/OurPartners";
import styles from "./partners.module.css"

export default function PartnersPage() {
  return (
    <div className={styles.pagewrapper}>
    <div className={styles.container}>
        <Header />
        <OurPartners />
       
        

      
        
    </div>
    <Footer />
    </div>
  );
}