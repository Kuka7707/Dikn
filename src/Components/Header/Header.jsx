import React, { Component } from 'react';
import H from './Header.module.css';

export default class Header extends Component {
   render() {
      return (
         <header className={H.header}>
          <img src="https://i.pinimg.com/originals/d9/12/09/d91209340bdc005936c46323a62caaff.png" width="55" height="50" alt="logo" />
          <h1 className={H.header_title}>Dikn</h1>
        </header>
      )
   }
}
