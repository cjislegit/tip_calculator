import styles from './Total.module.css';

const Total = ({ tipTotal, total, handleReset }) => {
  return (
    <div className={styles.total}>
      <div className={styles.totalTipAmount}>
        <div className={styles.totalLeft}>
          <div className={styles.totalTop}>Tip Amount</div>
          <div className={styles.totalBottom}>/ person</div>
        </div>
        <div className={styles.totalRight}>${tipTotal}</div>
      </div>
      <div className={styles.toalAmount}>
        <div className={styles.totalLeft}>
          <div className={styles.totalTop}>Total</div>
          <div className={styles.totalBottom}>/ person</div>
        </div>
        <div className={styles.totalRight}>${total}</div>
      </div>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Total;
