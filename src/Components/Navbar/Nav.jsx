import React, { Component } from 'react';
import N from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import FriendsContainer from './Friends/FriendsContainer';


const Nav = () => {
   return (
      <nav className={N.navbar}>
         <ul className={N.menu}>
            <li className={N.item}><NavLink className={N.link} activeClassName={N.active} to="/profile">Профиль</NavLink></li>
            <li className={N.item}><NavLink className={N.link} activeClassName={N.active} to="/dialogs">Сообщение</NavLink></li>
            <li className={N.item}><NavLink className={N.link} activeClassName={N.active} to="/picture">Картинки</NavLink></li>
            <li className={N.item}><NavLink className={N.link} activeClassName={N.active} to="/news">Новости</NavLink></li>
         </ul>
         <FriendsContainer/>
      </nav>
   )
}
export default Nav

