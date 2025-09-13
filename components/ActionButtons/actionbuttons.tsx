import Link from "next/link";
import styles from "@/components/ActionButtons/Actionbuttons.module.css";

const buttons = [
  { label: "Top destinations", href: "/SearchTickets" },
  { label: "Group booking", href: "/SearchTickets" },
  { label: "Partner Airlines", href: "/Airlines" },
  { label: "My bookings", href: "/Bookings" },
  { label: "Travel documents", href: "/FAQ" },
  { label: "Contact Us", href: "/ContactUs" },
];

const ActionButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      {buttons.map(({ label, href }) => (
        <Link key={label} href={href} className={styles.button}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default ActionButtons;