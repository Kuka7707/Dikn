import React, { Component } from 'react';
import N from './Nav.module.css';

export default class Nav extends Component {
   render() {
      return (
         <nav className={N.navbar}>
            <ul className={N.menu}>
               <li className={N.item}><a className={N.link} href="#">Профиль</a></li>
               <li className={N.item}><a className={N.link} href="#">Сообщение</a></li>
               <li className={N.item}><a className={N.link} href="#">Картинки</a></li>
               <li className={N.item}><a className={N.link} href="#">Новости</a></li>
            </ul>
         </nav>
      )
   }
}
