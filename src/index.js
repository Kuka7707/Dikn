import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/redux-store';
import StoreContetn from './StoreContent';


let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContetn.Provider value={store}>
        <App/>
      </StoreContetn.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerender(store.getState());

store.subscribe(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-P
serviceWorker.unregister();
