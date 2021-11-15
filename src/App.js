import { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Bill from './Bill';
import SelectTip from './SelectTip';

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [tipAmout, setTipAmount] = useState(5);

  return (
    <div className='App'>
      <div className='pageLogo'>
        <img src={logo} alt='Spillter Logo' />
      </div>
      <div className='calculator'>
        <Bill billAmount={billAmount} setBillAmount={setBillAmount} />
        <SelectTip setTipAmount={setTipAmount} />
      </div>
    </div>
  );
}

export default App;
