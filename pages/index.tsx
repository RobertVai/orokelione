import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero"
import ActionButtons from "@/components/ActionButtons/actionbuttons";
import styles from "@/styles/Home.module.css"
import CatchSunBanner from "@/components/CatchSunBanner/CatchSunBanner";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <ActionButtons />
      <CatchSunBanner />

    </div>
  );
}
