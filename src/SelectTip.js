import styles from './SelectTip.module.css';

const SelectTip = ({ setTipAmount, activeButton, handleTip }) => {
  return (
    <div className={styles.selectTip}>
      <div className={styles.selectTipLabel}>Select Tip %</div>
      <div className={styles.selectTipContainer}>
        <button
          value='5'
          className={'5' === activeButton ? styles.active : ''}
          onClick={(e) => handleTip(e.target.value)}
        >
          5%
        </button>
        <button
          value='10'
          className={'10' === activeButton ? styles.active : ''}
          onClick={(e) => handleTip(e.target.value)}
        >
          10%
        </button>
        <button
          value='15'
          className={'15' === activeButton ? styles.active : ''}
          onClick={(e) => handleTip(e.target.value)}
        >
          15%
        </button>
        <button
          value='25'
          className={'25' === activeButton ? styles.active : ''}
          onClick={(e) => handleTip(e.target.value)}
        >
          25%
        </button>
        <button
          value='50'
          className={'50' === activeButton ? styles.active : ''}
          onClick={(e) => handleTip(e.target.value)}
        >
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
