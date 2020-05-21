import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { addNewPost, updateText, addDialogText, GoText, subscribe } from './Redux/state.js';
import state from './Redux/state';


 let rerender = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addNewPost={addNewPost} updateText={updateText} addDialogText={addDialogText} GoText={GoText} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerender();

subscribe(rerender);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-P
serviceWorker.unregister();
