import React from 'react'
import Header from '@/components/Header/Header'
import { Contact } from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'
import styles from './contactus.module.css'

export default function ContactUsPage() {
  return (
    <div className={styles.pagewrapper}>
    <div className={styles.container}>
        <Header />
        <Contact />
       
        

      
        
    </div>
    <Footer />
    </div>
  )
}
