import React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Text = styled.div`
  width: 200px;
  margin: 0 auto;
`;

const App = () => (
  <Text>You did it!</Text>
);

export default hot(module)(App);
