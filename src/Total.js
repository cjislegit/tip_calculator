import styles from './Total.module.css';

const Total = () => {
  return (
    <div className='total'>
      <div className={styles.totalTipAmount}>
        <div>
          Tip Amount <br />/ person
        </div>
        <div>$4.27</div>
      </div>
      <div className={styles.toalAmount}>
        <div>
          Total <br />/ person
        </div>
        <div>$32.79</div>
      </div>
      <button className={styles.totalReset} value='5'>
        RESET
      </button>
    </div>
  );
};

export default Total;
