import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline'; // ajuda a formatar oas margins e paddings que o browser tem por padrão


ReactDOM.render(
  <React.StrictMode>

    <CssBaseline />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
