import React, { useState, useEffect } from 'react';
import Button from '../components/Button/Button';


function Select({ value, setCurrency }){
  const [currencies, setCurrencies] = useState([]);

  // runs each time Select is mounted in code
  useEffect(() => {
    fetch(`https://api.exchangeratesapi.io/latest?base=PLN`)
    .then(response => response.json())
    .then(data => {
      setCurrencies(Object.keys(data.rates))
    });

    return () => {
      // clearInterval
      // removeEventListener
    }
  }, []);

  return (
    <select value={value} onChange={(event) => setCurrency(event.target.value)}>
      {currencies.map((elem) => <option key={`curr-${elem}`} value={elem}>{elem}</option>)}
    </select>
  )
}


function Calculator() {
  const [ result, setResult ]  =  useState(0);
  const [ amount, setAmount ]  =  useState(0);
  const [ currencyFrom, setCurrencyFrom ] = useState('PLN');
  const [ currencyTo, setCurrencyTo ] = useState('USD');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.exchangeratesapi.io/latest?base=${currencyFrom}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setResult(amount * data.rates[currencyTo]);
    });
  }

  return(

    <form className="calculator" onSubmit={handleSubmit}>
      <div>
        <input type="number" placeholder="Amount" onChange={(event) => { setAmount(event.target.value); } } />
      </div>
      <div>
        <span>From:</span>
        <Select value={ currencyFrom } setCurrency= {setCurrencyFrom} />
      </div>
      <div>
        <span>To:</span>
        <Select value={ currencyTo } setCurrency= {setCurrencyTo} />
      </div>
      <div className="result">Result: {result} </div>
      <Button type="submit">Send</Button>
    </form>

  );
}

export default Calculator;