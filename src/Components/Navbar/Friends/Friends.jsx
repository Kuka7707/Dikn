import React from 'react';
import F from './Friends.module.css';
import Friend from './Friend';
import { NavLink } from 'react-router-dom';



const Friends = (props) => {
   let NewFriend = props.friends.map(f => (<Friend img={f.img} key={f.id} name={f.name} />));
   return (
      <div className={F.friends}>
         <NavLink className={F.link} to="/users/">Пользователи</NavLink>
         <div className={F.flex}>
            {NewFriend}
         </div>
      </div>
   )
}

export default Friends
