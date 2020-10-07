import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Calculator from './components/Calculator/Calculator';

const day = "Monday";


function App() {
  // JSX
  return (
    <div className="App">
      <p>Hello!</p>
      <p>{day}</p>
      <Button label="Don't click me now" />
      <Button />
      <Calculator />
    </div>
  );
}

export default App;
