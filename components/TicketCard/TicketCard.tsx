import React from "react";
import styles from "./TicketCard.module.css";
import { useBookings } from "@/contexts/BookingContext";

type Segment = {
  departTime: string;
  arriveTime: string;
  departCode: string;
  arriveCode: string;
  duration: string;
  direct?: boolean;
};

type Props = {
  airline: string;
  warning?: string;
  price: string;
  segments: [Segment, Segment];
  onBook?: () => void;
  onDetails?: () => void;
};

const TicketCard: React.FC<Props> = ({
  airline,
  warning,
  price,
  segments,
  onBook,
  onDetails,
}) => {
  const [outbound, inbound] = segments;
  const { addBooking } = useBookings();

  const handleBook = () => {
    if (onBook) return onBook();
    
    addBooking({ airline, price, warning, segments });
  };

  const handleDetails = () => {
    if (onDetails) return onDetails();
    
  };

  return (
    <article className={styles.wrap}>
      
      <div className={styles.left}>
        <div className={styles.airline}>{airline}</div>

        
        <div className={styles.segment}>
          <time className={styles.time}>{outbound.departTime}</time>
          <div className={styles.mid}>
            <span className={styles.duration}>{outbound.duration}</span>
            <span className={styles.line}>────────────────────────</span>
          </div>
          <time className={styles.time}>{outbound.arriveTime}</time>
          <div className={styles.codes}>
            <span>{outbound.departCode}</span>
            <span className={styles.direct}>{outbound.direct ? "Direct" : ""}</span>
            <span>{outbound.arriveCode}</span>
          </div>
        </div>

        
        <div className={styles.segment}>
          <time className={styles.time}>{inbound.departTime}</time>
          <div className={styles.mid}>
            <span className={styles.duration}>{inbound.duration}</span>
            <span className={styles.line}>────────────────────────</span>
          </div>
          <time className={styles.time}>{inbound.arriveTime}</time>
          <div className={styles.codes}>
            <span>{inbound.departCode}</span>
            <span className={styles.direct}>{inbound.direct ? "Direct" : ""}</span>
            <span>{inbound.arriveCode}</span>
          </div>
        </div>
      </div>

      
      <div className={styles.divider} aria-hidden />

      
      <div className={styles.right}>
        {warning && <div className={styles.warning}>{warning}</div>}
        <div className={styles.from}>From</div>
        <div className={styles.price}>{price}</div>

        <button className={styles.book} onClick={handleBook}>
          Book
        </button>
        <button className={styles.details} onClick={handleDetails}>
          Flight details
        </button>
      </div>
    </article>
  );
};

export default TicketCard;