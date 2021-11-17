import styles from './Bill.module.css';
import dollar from './assets/icon-dollar.svg';

const Bill = ({ billAmount, setBillAmount, handleTotals }) => {
  return (
    <div className={styles.bill}>
      <div className={styles.billLabel}>Bill</div>
      <div className={styles.billContainer}>
        <img
          className={styles.billDollarSign}
          src={dollar}
          alt='Dollar symbol'
        />
        <input
          type='text'
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Bill;
