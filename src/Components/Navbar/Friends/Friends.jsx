import React from 'react';
import F from './Friends.module.css';
import Friend from './Friend';
import StoreContetn from '../../../StoreContent';

const Friends = () => {
   return (
      <StoreContetn.Consumer>{
         (store) => {
            let NewFriend = store.getState().navbarFriends.friends.map(f => (<Friend img={f.img} name={f.name} />));
            return (
               <div className={F.friends}>
                  Друзья
                  <div className={F.flex}>
                     {NewFriend}
                  </div>
               </div>)
         }
      }
      </StoreContetn.Consumer>
   )
}

export default Friends
