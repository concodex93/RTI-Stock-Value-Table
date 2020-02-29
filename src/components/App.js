import React, { useState } from 'react';

import Table from './Table/Table';
import createAxios from './Api/quote';
import Input from './Input';
import Graph from './Graph';

import '../styles/App.css';

const App = () => {
  // Hook State
  const [quotes, setQuotes] = useState([]);
  const [earnings, setEarnings] = useState([]);
  const [stocks, setStocks] = useState({});
  const [searches, setSearch] = useState({});

  const columns = ['Current', 'Open', 'Closed', 'EPS', 'P/E Ratio'];

  const getData = async (action, symbol) => {
    try {
      const response = await createAxios(action, symbol).get();
      if (response.status !== 200) {
        console.log(`Something went wrong : ${response.status}`);
      } else {
        switch (action) {
          case 'TIME_SERIES_DAILY':
            setStocks(response.data);
            break;
          case 'quote':
            setQuotes(response.data);
            break;
          case 'earnings':
            setEarnings(response.data);
            break;
          case 'SYMBOL_SEARCH':
            setSearch(response.data);
            break;
          default:
            break;
        }
      }
    } catch (error) {
      console.log('Ops, something happened before the request was sent!');
    }
  };

  const onFormSubmit = input => {
    if (input) {
      const upperInput = input.toUpperCase();
      getData('quote', upperInput);
      getData('earnings', upperInput);
      getData('TIME_SERIES_DAILY', upperInput);
    }
  };

  return (
    <div className="wrapper">
      <div className="desciptor">
        <span>Enter a stock symbol to get latest market prices</span>
      </div>
      <Input
        searches={searches}
        getData={getData}
        onFormSubmit={onFormSubmit}
      />
      <Table columns={columns} quotes={quotes} earnings={earnings} />
      <Graph stocks={stocks} />
    </div>
  );
};

export default App;
