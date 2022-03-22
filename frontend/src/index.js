import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import { ContextProvider } from './context/Appcontext'
import { Provider } from 'react-redux'
import store from './app/store'




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <ContextProvider>
         <App />
    </ContextProvider>
    </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

