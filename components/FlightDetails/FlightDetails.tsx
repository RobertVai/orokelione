import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./FlightDetails.module.css"

type Segment = {
  departTime: string;
  arriveTime: string;
  departCode: string;
  arriveCode: string;
  duration: string;
  direct?: boolean;
};

type Props = {
  open: boolean;
  onClose: () => void;
  airline: string;
  price: string;
  segments: [Segment, Segment];
};

const FlightDetailsModal: React.FC<Props> = ({ open, onClose, airline, price, segments }) => {
  const [outbound, inbound] = segments;
  const dialogRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className={styles.backdrop} role="presentation" onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-label="Flight details"
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <header className={styles.header}>
          <div className={styles.title}>Flight details</div>
          <button className={styles.close} aria-label="Close" onClick={onClose}>×</button>
        </header>

        <div className={styles.body}>
          <div className={styles.row}>
            <span className={styles.key}>Airline</span>
            <span className={styles.val}>{airline}</span>
          </div>
          <div className={styles.row}>
            <span className={styles.key}>Fare</span>
            <span className={styles.val}>Economy • Light</span>
          </div>
          <div className={styles.row}>
            <span className={styles.key}>Price</span>
            <span className={styles.val}>{price}</span>
          </div>

          <hr className={styles.sep} />

          <div className={styles.block}>
            <div className={styles.blockTitle}>Outbound</div>
            <div className={styles.line}>
              {outbound.departCode} → {outbound.arriveCode}
              <span className={styles.meta}> • {outbound.departTime}–{outbound.arriveTime}</span>
              <span className={styles.meta}> • {outbound.duration}</span>
              <span className={styles.pill}>{outbound.direct ? "Direct" : "Connections"}</span>
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.blockTitle}>Inbound</div>
            <div className={styles.line}>
              {inbound.departCode} → {inbound.arriveCode}
              <span className={styles.meta}> • {inbound.departTime}–{inbound.arriveTime}</span>
              <span className={styles.meta}> • {inbound.duration}</span>
              <span className={styles.pill}>{inbound.direct ? "Direct" : "Connections"}</span>
            </div>
          </div>

          <hr className={styles.sep} />

          <div className={styles.grid}>
            <div><span className={styles.key}>Carry-on</span><span className={styles.val}>1 × 8 kg</span></div>
            <div><span className={styles.key}>Checked</span><span className={styles.val}>Not included</span></div>
            <div><span className={styles.key}>Changes</span><span className={styles.val}>For a fee</span></div>
            <div><span className={styles.key}>Refund</span><span className={styles.val}>Non-refundable</span></div>
            <div><span className={styles.key}>Online check-in</span><span className={styles.val}>Opens 24h before</span></div>
            <div><span className={styles.key}>Airport check-in</span><span className={styles.val}>Available (may cost)</span></div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default FlightDetailsModal;
