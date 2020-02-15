import React, { useState } from 'react';

import Table from './Table/Table';
import createAxios from './Api/quote';
import Input from './Input';

import '../styles/App.css';

const App = () => {
  // Hook State
  const [quotes, setQuotes] = useState({});
  const [earnings, setEarnings] = useState([]);

  const getData = async (action, symbol) => {
    try {
      const response = await createAxios(action, symbol).get();
      if (response.status !== 200) {
        console.log(`Something went wrong : ${response.status}`);
      } else {
        action === 'quote'
          ? setQuotes(response.data)
          : setEarnings(response.data);
      }
    } catch (error) {
      console.log('Ops, something happened before the request was sent!');
    }
  };

  const onFormSubmit = input => {
    if (input) {
      const upperInput = input.toUpperCase();
      // Get quote data
      getData('quote', upperInput);
      // Get earning data
      getData('stock/earnings', upperInput);
    }
  };

  return (
    <div className="wrapper">
      <div className="desciptor">
        <span>Enter a stock symbol to get latest market prices</span>
      </div>
      <Input onFormSubmit={onFormSubmit} />
      <Table quotes={quotes} earnings={earnings} />
    </div>
  );
};

export default App;
