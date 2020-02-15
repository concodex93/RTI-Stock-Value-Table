import React, { useState } from 'react';

import '../styles/Input.css';

const Input = props => {
  const { onFormSubmit } = props;
  const [input, setInput] = useState('');

  const onChange = event => {
    if (event) {
      setInput(event.target.value);
      console.log(input);
    }
  };

  const onSubmit = event => {
    if (event) {
      event.preventDefault();
      onFormSubmit(input);
    }
  };

  return (
    <div className="ui form">
      <div className="ui action input">
        <input onChange={onChange} type="text" placeholder="Search by Symbol" />
        <button onClick={onSubmit} className="ui button">
          <i className="search icon"></i>
        </button>
      </div>
    </div>
  );
};

export default Input;
