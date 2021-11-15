import styles from './NumberOfPeople.module.css';
import person from './assets/icon-person.svg';

const NumberOfPeople = ({ numberOfPeople, setNumberOfPeople }) => {
  return (
    <div className={styles.numberOfPeople}>
      <div className={styles.numberOfPeopleLabel}>Number of People</div>
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
