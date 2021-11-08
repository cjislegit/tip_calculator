import { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Bill from './Bill';

function App() {
  const [billAmount, setBillAmount] = useState('100');

  return (
    <div className='App'>
      <div className='pageLogo'>
        <img src={logo} alt='Spillter Logo' />
      </div>
      <div className='calculator'>
        <Bill billAmount={billAmount} />
      </div>
    </div>
  );
}

export default App;
