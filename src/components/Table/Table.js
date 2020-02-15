import React from 'react';

const Table = props => {
  const { c, o, pc } = props.quotes;
  const earnings = props.earnings[0];

  console.log(props);

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Previous Closed Price</th>
          <th>Open Price</th>
          <th>Current Price</th>
          <th>Earnings Per Share</th>
          <th>P/E Ratio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Previous Closed Price">{pc}</td>
          <td data-label="Open Price">{o}</td>
          <td data-label="Current Price">{c}</td>
          <td data-label="Earnings Per Share">{earnings && earnings.actual}</td>
          <td data-label="P/E Ratio">{earnings && (c/earnings.actual).toString()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
