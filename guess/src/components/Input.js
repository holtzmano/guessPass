import React from 'react';
import styled from 'styled-components';

const CenteredInput = styled.input`
  width: 200px;
  height: 40px;
  margin: auto;
  display: block;
`;

const CenteredButton = styled.button`
  width: 200px;
  height: 40px;
  margin: 10px auto; /* Adjust vertical margin as needed */
  display: block;
`;

const Input = ({ value, onChange, onSubmit }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <CenteredInput
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter password here"
      />
      <CenteredButton type="submit">Submit Password</CenteredButton>
    </form>
  );
};

export default Input;
