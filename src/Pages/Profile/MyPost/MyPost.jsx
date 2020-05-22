import React from 'react';
import N from './MyPost.module.css';



const MyPost = (props) => {

   let onAddPost = () => {
      props.addPost();
   }

   let changeText = (e) => {
      let text = e.target.value;
      props.upDateText(text);
   }

   return (
      <div className={N.new_post}>
         <div>
            <textarea onChange={changeText} className={N.new_text} value={props.newText} placeholder="Напишите публикацию" />
         </div>
         <div className={N.flex}>
            <button onClick={onAddPost} className={N.btn}>Опубликовать</button>
         </div>
      </div>
   )
}

export default MyPost
