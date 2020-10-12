import React from 'react';
import './App.css';
import Calculator from './pages/Calculator';

const day = "Monday";


function App() {
  // JSX
  return (
    <div className="App">
      <p>Hello!</p>
      <p>{day}</p>
      <Calculator />
    </div>
  );
}

export default App;
