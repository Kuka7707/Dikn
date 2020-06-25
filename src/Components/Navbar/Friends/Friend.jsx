import React from 'react';
import F from './Friends.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
   return (
      <NavLink className={F.friend} to={"/profile/"+ props.id}>
         <div className={F.img}>
            <img src={props.img} />
         </div>
         <div className={F.name}>{props.name}</div>
      </NavLink>
   )
}

export default Friend
