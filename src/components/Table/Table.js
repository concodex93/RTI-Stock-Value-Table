import React from 'react';

const Table = props => {
  const { c, o, pc } = props.quotes;
  const { columns } = props;
  const earnings = props.earnings[0];

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          {columns &&
            columns.map((column, index) => <th key={index}>{column}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Current">{c && c}</td>
          <td data-label="Open">{o && o}</td>
          <td data-label="Closed">{pc && pc}</td>
          <td data-label="EPS">{earnings && earnings.actual}</td>
          <td data-label="P/E Ratio">{earnings && (c / earnings.actual).toString()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
