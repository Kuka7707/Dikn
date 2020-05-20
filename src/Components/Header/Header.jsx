import React, { Component } from 'react';
import H from './Header.module.css';

export default class Header extends Component {
   render() {
      return (
         <header className={H.header}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Drake_Bulldogs_%22D%22_logo.svg/1113px-Drake_Bulldogs_%22D%22_logo.svg.png" width="55" height="50" alt="logo" />
          <h1 className={H.header_title}>ikn</h1>
        </header>
      )
   }
}
