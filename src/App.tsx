import React from 'react';
import { ToastContainer as ToastProvider } from 'react-toastify';

import { GlobalStyle } from './global/globalStyle';

import AppRouter from './router';

export function App() {
  return (
    <React.Fragment>
      <ToastProvider />

      <AppRouter />
      <GlobalStyle />
    </React.Fragment>
  )
}