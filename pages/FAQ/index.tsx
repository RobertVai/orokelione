import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import QuestionsFAQ from "@/components/QuestionsFAQ/QuestionsFAQ";
import styles from "./faq.module.css"

export default function FAQPage() {
  return (
    <div className={styles.pagewrapper}>
    <div className={styles.container}>
        <Header />
        <QuestionsFAQ />
       
        

      
        
    </div>
    <Footer />
    </div>
  );
}