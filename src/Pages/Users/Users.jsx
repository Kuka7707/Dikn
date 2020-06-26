import React from 'react'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom'


const Users = (props) => {
   return (
      <div>
         <h1>Пользователи</h1>
         <hr />
         <div className={s.Users}>
            {props.users.map(u => <div className={s.user} key={u.id}>
               {/*      {u.online ? :}            */}
               {u.Online
                  ? <NavLink to={'/users/'+u.id} className={s.online}>
                     <img className={s.img} src={u.photoUrl} />
                     </NavLink>
                  : <NavLink to={'/users/'+u.id} className={s.ofline}>
                     <img className={s.img} src={u.photoUrl} />
                     </NavLink>
               }
               <div className={s.info}>
                  <NavLink to={'/users/'+u.id} className={s.name}>
                     {u.Name}
                  </NavLink>
                  <div className={s.location}>
                     {u.location.country} / {u.location.city}
                  </div>
                  <div className={s.status}>
                     Статус: {u.Status}
                  </div>
               </div>
            </div>)}
         </div>
      </div>
   )
}

export default Users
