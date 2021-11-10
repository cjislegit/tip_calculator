import styles from './SelectTip.module.css';

const SelectTip = () => {
  return (
    <div className={styles.selectTip}>
      <div className={styles.selectTipLabel}>Select Tip %</div>
      <div className={styles.selectTipContainer}>
        <div className={styles.selectTipRowR}>
          <input type='button' value='5%' />
          <input type='button' value='15%' />
          <input type='button' value='50%' />
        </div>
        <div className={styles.selectTipRowL}>
          <input type='button' value='10%' />
          <input type='button' value='25%' />
          <input type='text' placeholder='Custom' />
        </div>
      </div>
    </div>
  );
};

export default SelectTip;
