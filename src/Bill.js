import styles from './Bill.module.css';
import dollar from './assets/icon-dollar.svg';

const Bill = ({ billAmount }) => {
  return (
    <div className={styles.bill}>
      <div className={styles.billLabel}>Bill</div>
      <div className={styles.billContainer}>
        <img
          className={styles.billDollarSign}
          src={dollar}
          alt='Dollar symbol'
        />
        <div className={styles.billAmount}>{billAmount}</div>
      </div>
    </div>
  );
};

export default Bill;
