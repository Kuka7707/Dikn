import React from 'react';
import N from './MyPost.module.css';
import Post from '../Post/Post';



const MyPost = (props) => {
   debugger;
   let onAddPost = () => {
      props.addPost();
   }

   let changeText = (e) => {
      let text = e.target.value;
      props.upDateText(text);
   }

   let Remove = () => {
      props.remove();
   }

   let NewPost = props.post.map(p => (<Post text={p.text} key={p.id} remove={Remove}/>));


   return (
         <div className={N.new_post}>
            <div>
               <textarea onChange={changeText} className={N.new_text} value={props.newText} placeholder="Напишите публикацию" />
            </div>
            <div className={N.flex}>
               <button onClick={onAddPost} className={N.btn}>Опубликовать</button>
            </div>
            {NewPost}
         </div>
         
   )
}

export default MyPost
