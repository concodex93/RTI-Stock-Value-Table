import React from 'react';

const Table = props => {
  const { c, o, pc } = props.quotes;

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
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
