import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import {ContextProvider } from './context/Appcontext'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContextProvider>
        <App />
        </ContextProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

