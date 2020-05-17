import React, { Component } from 'react';
import N from './Nav.module.css';

export default class Nav extends Component {
   render() {
      return (
         <nav className={N.navbar}>
            <ul className={N.menu}>
               <li className={N.item}><a className={N.link} href="/profile">Профиль</a></li>
               <li className={N.item}><a className={N.link} href="/dialogs">Сообщение</a></li>
               <li className={N.item}><a className={N.link} href="/picture">Картинки</a></li>
               <li className={N.item}><a className={N.link} href="/news">Новости</a></li>
            </ul>
         </nav>
      )
   }
}
