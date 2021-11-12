import styles from './NumberOfPeople.module.css';
import person from './assets/icon-person.svg';

const NumberOfPeople = () => {
  return (
    <div className={styles.numberOfPeople}>
      <div className={styles.numberOfPeopleLabel}>Number of People</div>
      <div className={styles.numberOfPeopleContainer}>
        <img src={person} alt='Person Icon' />
      </div>
    </div>
  );
};

export default NumberOfPeople;
