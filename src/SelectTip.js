import styles from './SelectTip.module.css';

const SelectTip = () => {
  return (
    <div className={styles.selectTip}>
      <div className={styles.selectTipLabel}>Select Tip</div>
      <div className={styles.selectTipContainer}></div>
    </div>
  );
};

export default SelectTip;
