import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {cappucino} from './reducers/Cappucino';
import {chocolate} from './reducers/Chocolate';
import {mocha} from './reducers/Mocha';
import {saldo} from './reducers/Saldo';
import {tea} from './reducers/Tea';
import AppContext from './AppContext';

ReactDOM.render(
  <AppContext.Provider value={{cappucino, chocolate, mocha, saldo, tea}}>
    <App />
  </AppContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
