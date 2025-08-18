import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import styles from './aboutus.module.css'
import About from '@/components/About/About'


function index() {
  return (
    <div className={styles.pagewrapper}>
    <div className={styles.container}>
        <Header />
        <About />
       
        

      
        
    </div>
    <Footer />
    </div>
  )
}

export default index
