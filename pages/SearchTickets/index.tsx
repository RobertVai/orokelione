import React from 'react'
import Header from '@/components/Header/Header'
import styles from "./searchtickets.module.css"
import FlightSearch from "@/components/FlightSearch/FlightSearch";
import FlightResults from '@/components/FlightResults/FlightResults';
import Footer from '@/components/Footer/Footer';




function index() {
  return (
    <div className={styles.pagewrapper}>
    <div className={styles.container}>
        <Header />
        <FlightSearch />
        <FlightResults />
        
        

      
        
    </div>
    <Footer />
    </div>
    
  )
}

export default index
