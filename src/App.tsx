import React from 'react';

import { Home } from './pages/Home';

import { GlobalStyle } from './global/globalStyle';

export function App() {
  return (
    <React.Fragment>
      <Home />
      <GlobalStyle />
    </React.Fragment>
  )
}