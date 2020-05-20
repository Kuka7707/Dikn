import React from 'react'
import P from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
   return (
      <div className={P.prof_back}>
            <div className={P.prof_back_in}>
               <img className={P.prof_back_img} src="https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg" />
            </div>
            <div className={P.in}>
               <div className={P.prof_ava}>
                  <img className={P.prof_ava_img} src="http://www.youloveit.ru/uploads/posts/2020-04/1586360531_youloveit_ru_dipper_gravity_falls_na_avu06.jpg" />
               </div>
               <div className={P.prof_info}>
                  <div className={P.prof_info_name}>Floki Vik</div>
                  <div className={P.prof_info_descrip}>
                     <div className={P.status}>Status: Online</div>
                     <div className={P.city}>City: Aktau</div>
                  </div>
               </div>
            </div>
         </div>
   )
}

export default ProfileInfo
