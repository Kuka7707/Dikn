import React from 'react';
import F from './Friends.module.css';
import Friend from './Friend';



const Friends = (props) => {
   let NewFriend = props.friends.map(f => (<Friend img={f.img} name={f.name} />));
   return (
      <div className={F.friends}>
         Друзья
         <div className={F.flex}>
            {NewFriend}
         </div>
      </div>
   )
}

export default Friends
