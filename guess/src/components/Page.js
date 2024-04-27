import React from 'react';
import styled from 'styled-components';

// Styled component for the entire page
const StyledPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
`;

const Page = ({ children }) => {
  return <StyledPage>{children}</StyledPage>;
};

export default Page;
