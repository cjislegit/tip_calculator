import styles from './Total.module.css';

const Total = () => {
  return (
    <div className={styles.total}>
      <div className={styles.totalTipAmount}>
        <div className={styles.totalLeft}>
          <div className={styles.totalTop}>Tip Amount</div>
          <div className={styles.totalBottom}>/ person</div>
        </div>
        <div className={styles.totalRight}>$4.27</div>
      </div>
      <div className={styles.toalAmount}>
        <div className={styles.totalLeft}>
          <div className={styles.totalTop}>Total</div>
          <div className={styles.totalBottom}>/ person</div>
        </div>
        <div className={styles.totalRight}>$32.79</div>
      </div>
      <button className={styles.totalReset} value='5'>
        RESET
      </button>
    </div>
  );
};

export default Total;
