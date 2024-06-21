import React from 'react';

import { Home } from './pages/Home';

import { GlobalStyle } from './global/globalStyle';
import { ToastContainer as ToastProvider } from 'react-toastify';

export function App() {
  return (
    <React.Fragment>
      <ToastProvider />

      <Home />
      <GlobalStyle />
    </React.Fragment>
  )
}