import React, { Component } from 'react'

export default class Nav extends Component {
   render() {
      return (
         <nav className="nav">
            <ul>
               <li><a href="#">Профиль</a></li>
               <li><a href="#">Сообщение</a></li>
               <li><a href="#">Картинки</a></li>
               <li><a href="#">Новости</a></li>
            </ul>
         </nav>
      )
   }
}
