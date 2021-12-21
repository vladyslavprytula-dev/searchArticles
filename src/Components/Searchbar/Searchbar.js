import React, { useState } from 'react';
import './Searchbar.scss';
export default function Seacrchbar({ onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handelInputChange = e => {
    const { value } = e.currentTarget;
    setInputValue(value);
  };
  const reset = () => {
    setInputValue('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    reset();
  };

  return (
    <header className="Searchbar">
      <form className="Searchbar_form" onSubmit={handleSubmit}>
        <input
          className="Searchbar_input"
          type="text"
          value={inputValue}
          onChange={handelInputChange}
          placeholder="Search news"
        />
        <button type="submit" className="Searchbar_button">
          <span className="Searchbar_button--label">Search</span>
        </button>
      </form>
    </header>
  );
}
