import styles from '@/components/ActionButtons/Actionbuttons.module.css'

const buttons = [
  'Top destinations',
  'Group booking',
  'Flight status',
  'My bookings',
  'Travel documents',
  'Gift cards',
];

const ActionButtons = () => {
  return (
    <div className={styles.buttonContainer}>
      {buttons.map((label) => (
        <button key={label} className={styles.button}>
          {label}
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;