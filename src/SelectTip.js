import styles from './SelectTip.module.css';

const SelectTip = ({ handleTip }) => {
  return (
    <div className={styles.selectTip}>
      <div className={styles.selectTipLabel}>Select Tip %</div>
      <div className={styles.selectTipContainer}>
        <button value='5' onClick={(e) => handleTip(e.target.value)}>
          5%
        </button>
        <button value='10' onClick={(e) => handleTip(e.target.value)}>
          10%
        </button>
        <button value='15' onClick={(e) => handleTip(e.target.value)}>
          15%
        </button>
        <button value='25' onClick={(e) => handleTip(e.target.value)}>
          25%
        </button>
        <button value='50' onClick={(e) => handleTip(e.target.value)}>
          50%
        </button>
        <input
          type='text'
          placeholder='Custom'
          onChange={(e) => handleTip(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SelectTip;
