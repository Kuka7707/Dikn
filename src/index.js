import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/state.js';


 let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} addNewPost={store.addNewPost.bind(store)} updateText={store.updateText.bind(store)} addDialogText={store.addDialogText.bind(store)} GoText={store.GoText.bind(store)} />
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
