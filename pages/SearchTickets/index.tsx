import React from 'react'
import { useState } from 'react';
import Header from '@/components/Header/Header'
import styles from "./searchtickets.module.css"
import FlightSearch from "@/components/FlightSearch/FlightSearch";
import FlightResults, { Ticket } from '@/components/FlightResults/FlightResults';
import Footer from '@/components/Footer/Footer';



const tickets: Ticket[] = [
  {
    id: "vno-lhr-2025-09-10-baltic",
    from: "Vilnius (VNO)",
    to: "London (LHR)",
    date: "2025-09-10",
    airline: "Air Baltic",
    price: "€ 79.99",
    warning: "Only 5 tickets left!",
    segments: [
      { departTime: "09:15", arriveTime: "12:15", departCode: "VNO", arriveCode: "LHR", duration: "3h 00min", direct: true },
      { departTime: "18:30", arriveTime: "22:00", departCode: "LHR", arriveCode: "VNO", duration: "3h 30min", direct: true }
    ]
  },
  {
    id: "kun-cdg-2025-09-12-af",
    from: "Kaunas (KUN)",
    to: "Paris (CDG)",
    date: "2025-09-12",
    airline: "Air France",
    price: "€ 81.99",
    warning: "Only 2 tickets left!",
    segments: [
      { departTime: "07:40", arriveTime: "09:50", departCode: "KUN", arriveCode: "CDG", duration: "2h 10min", direct: true },
      { departTime: "20:20", arriveTime: "22:30", departCode: "CDG", arriveCode: "KUN", duration: "2h 10min", direct: true }
    ]
  },
  {
    id: "rix-ber-2025-09-15-lh",
    from: "Riga (RIX)",
    to: "Berlin (BER)",
    date: "2025-09-15",
    airline: "Lufthansa",
    price: "€ 97.99",
    warning: "Only 5 tickets left!",
    segments: [
      { departTime: "12:00", arriveTime: "13:40", departCode: "RIX", arriveCode: "BER", duration: "1h 40min", direct: true },
      { departTime: "17:10", arriveTime: "18:50", departCode: "BER", arriveCode: "RIX", duration: "1h 40min", direct: true }
    ]
  },
  {
    id: "vno-fco-2025-09-20-ita",
    from: "Vilnius (VNO)",
    to: "Rome (FCO)",
    date: "2025-09-20",
    airline: "ITA Airways",
    price: "€ 89.99",
    warning: "Only 3 tickets left!",
    segments: [
      { departTime: "06:30", arriveTime: "08:55", departCode: "VNO", arriveCode: "FCO", duration: "2h 25min", direct: true },
      { departTime: "21:15", arriveTime: "23:40", departCode: "FCO", arriveCode: "VNO", duration: "2h 25min", direct: true }
    ]
  },
  {
    id: "lhr-vno-2025-09-25-baltic",
    from: "London (LHR)",
    to: "Vilnius (VNO)",
    date: "2025-09-25",
    airline: "Air Baltic",
    price: "€ 79.99",
    warning: "Only 5 tickets left!",
    segments: [
      { departTime: "08:20", arriveTime: "12:00", departCode: "LHR", arriveCode: "VNO", duration: "2h 40min", direct: true },
      { departTime: "19:10", arriveTime: "21:50", departCode: "VNO", arriveCode: "LHR", duration: "2h 40min", direct: true }
    ]
  }
];

function index() {
    const [results, setResults] = useState<Ticket[]>(tickets);

  const handleSearch = (from: string, to: string, date: string) => {
    const filtered = tickets.filter((t) =>
      (!from || t.from.toLowerCase().includes(from.toLowerCase())) &&
      (!to   || t.to.toLowerCase().includes(to.toLowerCase())) &&
      (true)
    );
    setResults(date ? filtered.map(t => ({ ...t, date })) : filtered);
  };
  return (
    <div className={styles.pagewrapper}>
    <div className={styles.container}>
        <Header />
        <FlightSearch onSearch={handleSearch} />
        <FlightResults items={results} />
        
        

      
        
    </div>
    <Footer />
    </div>
    
  )
}

export default index
