import { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Bill from './Bill';
import NumberOfPeople from './NumberOfPeople';
import SelectTip from './SelectTip';
import Total from './Total';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmout, setTipAmount] = useState(5);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  return (
    <div className='App'>
      <div className='pageLogo'>
        <img src={logo} alt='Spillter Logo' />
      </div>
      <div className='calculator'>
        <Bill billAmount={billAmount} setBillAmount={setBillAmount} />
        <SelectTip setTipAmount={setTipAmount} />
        <NumberOfPeople
          numberOfPeople={numberOfPeople}
          setNumberOfPeople={setNumberOfPeople}
        />
        <Total tipAmout={tipAmout} />
      </div>
    </div>
  );
}

export default App;
