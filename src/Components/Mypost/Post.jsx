import React from 'react';
import Po from './Post.module.css';

const Post = (props) => {
   return (
      <div className={Po.post}>
         <div className={Po.post_img}>
            <img src={props.img} />
         </div>
         <div className={Po.post_descr}>
            <div className={Po.info}>
               <div className={Po.title}>
                  {props.name}
               </div>
               <div className={Po.text}>
                  {props.text}
               </div>
            </div>
            <button className={Po.btn}>Like</button>
         </div>
      </div>
   )
}

export default Post


