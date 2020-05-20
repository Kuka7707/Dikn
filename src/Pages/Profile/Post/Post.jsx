import React from 'react';
import P from './Post.module.css';

const Post = (props) => {
   return (
      <div className={P.post}>
         <div className={P.post_img}>
            <img src='http://www.youloveit.ru/uploads/posts/2020-04/1586360531_youloveit_ru_dipper_gravity_falls_na_avu06.jpg' />
         </div>
         <div className={P.post_descr}>
            <div className={P.info}>
               <div className={P.title}>
                  Floki Vik
               </div>
               <div className={P.text}>
                  {props.text}
               </div>
            </div>
            <button className={P.btn}>Like</button>
            <button className={P.btn}>Удалить</button>
            
         </div>
      </div>
   )
}

export default Post


