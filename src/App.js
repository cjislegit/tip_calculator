import { useEffect, useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Bill from './Bill';
import NumberOfPeople from './NumberOfPeople';
import SelectTip from './SelectTip';
import Total from './Total';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmount, setTipAmount] = useState(5);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipTotal, setTipTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const handleTotals = () => {
    if (billAmount) {
      setTipTotal(
        (((tipAmount / 100) * billAmount) / numberOfPeople).toFixed(2)
      );
      setTotal(
        (
          (parseFloat(tipTotal) * numberOfPeople + parseFloat(billAmount)) /
          numberOfPeople
        ).toFixed(2)
      );
    }
  };

  const handleReset = () => {
    setTipTotal(0);
    setTotal(0);
    setTipAmount(5);
    setBillAmount(0);
  };

  useEffect(handleTotals, [billAmount, tipTotal, tipAmount, numberOfPeople]);

  return (
    <div className='App'>
      <div className='pageLogo'>
        <img src={logo} alt='Spillter Logo' />
      </div>
      <div className='calculator'>
        <Bill
          billAmount={billAmount}
          setBillAmount={setBillAmount}
          handleTotals={handleTotals}
        />
        <SelectTip setTipAmount={setTipAmount} />
        <NumberOfPeople
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
        />
        <Total tipTotal={tipTotal} total={total} handleReset={handleReset} />
      </div>
    </div>
  );
}

export default App;
