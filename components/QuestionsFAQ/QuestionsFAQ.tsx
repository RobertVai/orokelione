import React, { useMemo, useState } from "react";
import Head from "next/head";
import styles from "./QuestionsFAQ.module.css";

type QA = { id: string; cat: string; q: string; a: React.ReactNode };

const DATA: QA[] = [
  { id: "b1", cat: "Booking", q: "How can I find the cheapest flights?", a: <>Use flexible dates, compare nearby airports, and only enable <b>Direct flights only</b> if necessary.</> },
  { id: "b2", cat: "Booking", q: "Can I book for multiple travellers?", a: <>Yes. In search, open <b>Travellers & class</b> and set the number of passengers and cabin class.</> },
  { id: "p1", cat: "Payments", q: "Which payment methods do you accept?", a: <>Visa, Mastercard, Apple Pay and Google Pay (where available).</> },
  { id: "g1", cat: "Baggage", q: "Is baggage included in the fare?", a: <>It depends on the airline and fare. Cabin baggage is usually included, checked baggage may be extra.</> },
  { id: "c1", cat: "Changes & Refunds", q: "How can I change the date or passenger name?", a: <>Depends on your fare rules. Non-flex fares may require a fee.</> },
  { id: "f1", cat: "Flights", q: "When does online check-in open?", a: <>Usually 24–48 hours before departure. We’ll email a reminder.</> },
  { id: "a1", cat: "Account", q: "Do I need an account to book?", a: <>No, but having one helps manage your trips and checkout faster.</> },
  { id: "s1", cat: "Security", q: "Is my data safe with you?", a: <>Yes. We use encryption, PCI-DSS compliance and GDPR standards.</> },
  { id: "h1", cat: "Help", q: "How can I contact support?", a: <>Email <b>info@orokelione.lt</b> or call <b>+370 505 20661</b> (24/7).</> },
];

const CATS = ["Booking","Payments","Baggage","Changes & Refunds","Flights","Account","Security","Help"];

function FAQItem({ qa, open, onToggle }: { qa: QA; open: boolean; onToggle: () => void }) {
  return (
    <div className={styles.item}>
      <button className={styles.q} aria-expanded={open} onClick={onToggle}>
        {qa.q}
        <span className={styles.chev}>{open ? "−" : "+"}</span>
      </button>
      {open && <div className={styles.a}>{qa.a}</div>}
    </div>
  );
}

export default function QuestionsFAQ() {
  const [cat, setCat] = useState<string>("Booking");
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const list = useMemo(() => DATA.filter((x) => x.cat === cat), [cat]);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: DATA.map((x) => ({
      "@type": "Question",
      name: x.q,
      acceptedAnswer: { "@type": "Answer", text: typeof x.a === "string" ? x.a : "" }
    }))
  }), []);

  return (
    <>
      <Head>
        <title>FAQ — orokelione.lt</title>
        <meta name="description" content="Frequently asked questions about flights, bookings, baggage, payments and support on orokelione.lt." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <section className={styles.wrap}>
        <h1 className={styles.title}>FAQ</h1>
        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <h3>Categories</h3>
            <ul>
              {CATS.map((c) => (
                <li key={c}>
                  <button className={`${styles.catBtn} ${cat === c ? styles.active : ""}`} onClick={() => setCat(c)}>
                    {c}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.content}>
            {list.map((qa) => (
              <FAQItem
                key={qa.id}
                qa={qa}
                open={!!open[qa.id]}
                onToggle={() => setOpen((prev) => ({ ...prev, [qa.id]: !prev[qa.id] }))}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}