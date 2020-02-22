import React, { useState } from 'react';

import '../styles/Input.css';

const Input = props => {
  const { searches, onFormSubmit, getData } = props;
  const [input, setInput] = useState('');

  let promptSearch = [];

  if (searches.bestMatches) {
    searches.bestMatches.forEach(obj => {
      let symbol = obj['1. symbol'];
      let name = obj['2. name'];
      let keyPrompt = { name: name, symbol: symbol };
      promptSearch.push(keyPrompt);
    });
  }

  const updateInputField = e => {
    e.preventDefault();
    const inputField = document.querySelector('.search-input-field');
    if (inputField) {
      inputField.value = e.currentTarget.firstElementChild.firstElementChild.innerHTML;
    }
  };

  const onChange = e => {
    if (e) {
      setInput(e.target.value.toUpperCase());
      getData('SYMBOL_SEARCH', input);
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
        <input
          className="search-input-field"
          onChange={onChange}
          type="text"
          placeholder="Search by Symbol"
        />
        <button onClick={onSubmit} className="search ui button">
          <i className="search icon"></i>
        </button>
      </div>
      <div className="ui middle aligned divided list">
        {promptSearch &&
          promptSearch.map((prompt, index) => (
            <div className="item" key={index}>
              <div className="content">
                <a
                  className="header"
                  href={prompt.name}
                  onClick={updateInputField}
                >
                  <div className="search-prompt-wrapper">
                    <div>
                      {prompt.symbol} {prompt.name}
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Input;
