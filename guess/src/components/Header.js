import React from 'react';
import styled from 'styled-components';

// Define styled components for each class
const AppHeader = styled.header`
  height: 300px; /* Adjust the height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px; /* Adjust the font size as needed */
  color: gold; /* Adjust the color as needed */
`;

// Define your header component using the styled component
const Header = () => {
  return (
    <AppHeader>
      GUESSING GAME
    </AppHeader>
  );
};

export default Header;


//   background-color: #282c34;
