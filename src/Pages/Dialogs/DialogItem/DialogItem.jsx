import React from 'react';
import { NavLink } from 'react-router-dom';
import D from '../Dialogs.module.css';


const DialogItem = (props) => {
   return (
      <div>
         <NavLink activeClassName={D.active} className={D.di_item} to={"/dialogs/" + props.id}>

            <div className={D.friend}>
               <div className={D.img}>
                  <img src={props.img}/>
               </div>
               <div className={D.name}>{props.name}</div>
            </div>

         </NavLink>
      </div>
   )
}

export default DialogItem