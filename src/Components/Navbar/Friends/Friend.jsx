import React from 'react';
import F from './Friends.module.css';

const Friend = (props) => {
   return (
      <div className={F.friend}>
         <div className={F.img}>
            <img src={props.img} />
         </div>
         <div className={F.name}>{props.name}</div>
      </div>
   )
}

export default Friend
