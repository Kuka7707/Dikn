import React, { Component } from 'react'
import P from './Profile.module.css';
import Post from '../../Components/Navbar/Mypost/Post';

export default class Profile extends Component {
   render() {
      return (
         <div className={P.profile}>
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
            <Post name='Бота' text='Привет! калайсын? Мен уйде жатырмын! Далага шыгаснба?' img='https://www.meme-arsenal.com/memes/cdee9796a1e5a92779cccc2d6486980e.jpg' />
            <Post name='Дильназ' text='Привет! Мама жазса, маган звандасын деп айтшы! Менде номерин кетрп алыппын.' img='https://peterburg2.ru/uploads/20/04/11/ga11_3_2.jpg' />
         </div>
      )
   }
}
