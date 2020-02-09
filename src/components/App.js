import React, { useState, useEffect } from 'react';

import Table from './Table/Table';
import quote from './Api/quote';

const App = () => {
  // Hook State
  const [quotes, setQuotes] = useState({});

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await quote.get();
        if (response.status !== 200) {
          console.log(`Something went wrong : ${response.status}`);
        } else {
          setQuotes(response.data);
        }
      } catch (error) {
        console.log('Ops, something happened before the request was sent!');
      }
    };
    getQuotes();
  }, []);

 
  return (
    <div className="ui container">
      <span>Workday WDAY Stock & Earnings Report</span>
      <Table quotes={quotes} />
    </div>
  );
};

export default App;
