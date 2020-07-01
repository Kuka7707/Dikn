import React from 'react'
import s from './Users.module.css'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios'
import userPhoto from '../../assets/imgs/default.jpg'



class Users extends React.Component {
   constructor(props) {
      super(props);
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            props.setUsers(response.data.items)
         })
   }
   render() {
      return (
         <div>
            <h1>Пользователи</h1>
            <hr />
            <div className={s.Users}>
               {this.props.users.map(u => <div className={s.user} key={u.id}>
                  {/*      {u.online ? :}            */}
                  {u.Online
                     ? <NavLink to={'/users/' + u.id} className={s.online}>
                        <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto} />
                     </NavLink>
                     : <NavLink to={'/users/' + u.id} className={s.ofline}>
                        <img className={s.img} src={u.photos.small != null ? u.photos.small : userPhoto} />
                     </NavLink>
                  }
                  <div className={s.info}>
                     <NavLink to={'/users/' + u.id} className={s.name}>
                        {u.name}
                     </NavLink>
                     {/* <div className={s.location}>
                        {u.location.country} / {u.location.city}
                     </div> */}
                     <div className={s.status}>
                        Статус: {u.Status}
                     </div>
                  </div>
               </div>)}
            </div>
         </div>
      )
   }
}

export default Users
