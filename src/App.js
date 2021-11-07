import './App.css';
import logo from './assets/logo.svg';

function App() {
  return (
    <div className='App'>
      <div className='pageLogo'>
        <img src={logo} alt='Spillter Logo' />
      </div>
      <div className='calculator'></div>
    </div>
  );
}

export default App;
