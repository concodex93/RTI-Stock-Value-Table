import React from 'react';
import { Line } from 'react-chartjs-2';

import '../styles/Graph.css';

const Graph = props => {
  const stocks = props.stocks['Time Series (Daily)'];

  const stock = [];
  const labels = [];

  // Iterates thru dataset due to difficult Json parsing of response

  for (let propName in stocks) {
    labels.push(propName);
    if (stocks.hasOwnProperty(propName)) {
      let propValue = stocks[propName];
      stock.push(propValue['4. close']);
    }
  }

  const data = {
    labels: labels.reverse(),
    datasets: [
      {
        label: 'Stock',
        data: stock.reverse(),
        backgroundColor: ['rgba(255, 99, 132, 0.6)']
      }
    ]
  };

  if (stocks) {
    return (
      <div className="chart">
        <Line data={data} options={{}} />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Graph;
