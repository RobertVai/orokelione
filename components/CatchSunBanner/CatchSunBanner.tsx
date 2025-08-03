import styles from './CatchSunBanner.module.css';

const CatchSunBanner = () => {
  return (
    <section className={styles.banner}>
      
      <div className={styles.priceTag}>From €49.99</div>

      
      <div className={styles.content}>
        <h2 className={styles.title}>Let’s catch the<br/>sun!</h2>
        <button className={styles.button}>Book now</button>
      </div>



    </section>
    
  );
};

export default CatchSunBanner;