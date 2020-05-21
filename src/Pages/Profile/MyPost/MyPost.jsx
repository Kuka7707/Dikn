import React from 'react';
import N from './MyPost.module.css';
import {addPostActionCreator, changeTextActionCreator } from '../../../Redux/state';


const NewPost = (props) => {

   let AddNewPostR = React.createRef();

   let addPost = () => {
      // let text = AddNewPostR.current.value;
      props.dispatch(addPostActionCreator());
   }

   let changeText = () => {
      let text = AddNewPostR.current.value;
      let action = changeTextActionCreator(text);
      props.dispatch(action);
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
