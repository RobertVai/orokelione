import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero"
import ActionButtons from "@/components/ActionButtons/actionbuttons";
import styles from "@/styles/Home.module.css"
import CatchSunBanner from "@/components/CatchSunBanner/CatchSunBanner";
import TopDestinations from "@/components/TopDestinations/TopDestinations";
import HotDealsCarousel from "@/components/HotDealsCarousel/HotDealsCarousel";
import WhyTravel from "@/components/WhyTravel/WhyTravel";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.pagewrapper}>
      <div className={styles.alert}>
        <b> ATTENTION! Brussels Airlines has warned passengers to expect strikes on November 20th and 22nd and affecting public transport... (more info)</b>
      </div>
    <div className={styles.container}>
      
      <Header />
      <Hero />
      <ActionButtons />
      <CatchSunBanner />
      <TopDestinations />
      <HotDealsCarousel />
      <WhyTravel />
      
    

    </div>
    <Footer />
    </div>
    
    
  );
}
