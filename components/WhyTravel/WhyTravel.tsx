import styles from "./WhyTravel.module.css";

type Benefit = {
  title: string;
  text: string;
  image: string; 
};

const benefits: Benefit[] = [
  {
    title: "24/7 Personalized Assistance",
    text:
      "From the moment you start planning until you return home, we provide dedicated support.",
    image: "/images/supportspec.jpg",
  },
  {
    title: "Reliable Partnerships",
    text:
      "We partner with companies that prioritize safety, sustainability and responsible tourism.",
    image: "/images/deal.jpg",
  },
  {
    title: "Secure Payment",
    text:
      "We use secure payment gateways and never store your full card details on our systems.",
    image: "/images/cardpay.jpg",
  },
];

export default function WhyTravel() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Why travel with us:</h3>

      <div className={styles.grid}>
        {benefits.map((b) => (
          <article className={styles.card} key={b.title}>
            <img src={b.image} alt={b.title} className={styles.image} />
            <div className={styles.content}>
              <h4 className={styles.title}>{b.title}</h4>
              <p className={styles.text}>{b.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}