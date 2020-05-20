import React from 'react';
import N from './MyPost.module.css';

const NewPost = (props) => {

   let AddNewPost = React.createRef();

   let addPost = () => {
      let text = AddNewPost.current.value;
      props.addPost(text);
      AddNewPost.current.value = '';
   }
   return (
      <div className={N.new_post}>
         <div>
            <textarea ref={AddNewPost} className={N.new_text}></textarea>
         </div>
         <div className={N.flex}>
            <button onClick={addPost} className={N.btn}>Опубликовать</button>
         </div>
      </div>
   )
}

export default NewPost
