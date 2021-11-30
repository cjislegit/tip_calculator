import styles from './SelectTip.module.css';

const SelectTip = ({ setTipAmount }) => {
  return (
    <div className={styles.selectTip}>
      <div className={styles.selectTipLabel}>Select Tip %</div>
      <div className={styles.selectTipContainer}>
        <button
          value='5'
          autoFocus
          onClick={(e) => setTipAmount(e.target.value)}
        >
          5%
        </button>
        <button value='10' onClick={(e) => setTipAmount(e.target.value)}>
          10%
        </button>
        <button value='15' onClick={(e) => setTipAmount(e.target.value)}>
          15%
        </button>
        <button value='25' onClick={(e) => setTipAmount(e.target.value)}>
          25%
        </button>
        <button value='50' onClick={(e) => setTipAmount(e.target.value)}>
          50%
        </button>
        <input
          type='text'
          placeholder='Custom'
          onChange={(e) => setTipAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SelectTip;
