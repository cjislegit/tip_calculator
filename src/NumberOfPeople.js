import styles from './NumberOfPeople.module.css';
import person from './assets/icon-person.svg';

const NumberOfPeople = ({ numberOfPeople, setNumberOfPeople }) => {
  return (
    <div className={styles.numberOfPeople}>
      <div className={styles.numberOfPeopleLabel}>
        <span>Number of People</span>{' '}
        <span className={numberOfPeople === '0' ? styles.zero : styles.notZero}>
          Can't be zero
        </span>
      </div>
      <div className={styles.numberOfPeopleContainer}>
        <img src={person} alt='Person Icon' />
        <input
          type='text'
          value={numberOfPeople}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
      </div>
    </div>
  );
};

export default NumberOfPeople;
