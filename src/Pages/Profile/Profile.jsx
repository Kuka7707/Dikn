import React from 'react'
import P from './Profile.module.css';
import Post from '../../Components/Mypost/Post';



const Profile = () => {
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
         <Post name='Дильназ' text='Привет! Мама жазса, маган звандасын деп айтшы! Мен номерин кетрп алыппын.' img='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg6MGACMuzkpSc57aTXU37DxTA9IBr3gwMjb1aJOmM7sK2Gxol&usqp=CAU' />
         <Post name="Азамат" text="Салам! Ертен келем, бешбармак дайындап койын!" img="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" />
      </div>
   )
}

export default Profile

