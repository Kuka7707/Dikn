import React from 'react';
import N from './MyPost.module.css';

const NewPost = (props) => {

   let AddNewPostR = React.createRef();

   let addPost = () => {
      let text = AddNewPostR.current.value;
      props.addNewPost(text);
   }

   let changeText = () => {
      let text = AddNewPostR.current.value;
      props.updateText(text);
   }

   return (
      <div className={N.new_post}>
         <div>
            <textarea onChange={changeText} ref={AddNewPostR} className={N.new_text} value={props.newText}/>
         </div>
         <div className={N.flex}>
            <button onClick={addPost} className={N.btn}>Опубликовать</button>
         </div>
      </div>
   )
}

export default NewPost
