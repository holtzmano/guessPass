import React from 'react';
import styled from 'styled-components';

// Styled component for centered input
const CenteredInput = styled.input`
  width: 200px; /* Adjust width as needed */
  height: 40px; /* Adjust height as needed */
  margin: auto; /* Center horizontally */
  display: block; /* Ensure input is a block-level element */
`;

const Input = ({ value, onChange }) => {
    return (
        <CenteredInput
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Enter password here"
        />
    );
};

export default Input;
