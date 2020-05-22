import React from 'react';
import MyPost from './MyPost';
import {addPostActionCreator, changeTextActionCreator } from '../../../Redux/ProfileReducer';


const MyPostContainer = (props) => {
   
   let addPost = () => {
      props.dispatch(addPostActionCreator());
   }

   let onChangeText = (text) => {
      let action = changeTextActionCreator(text);
      props.dispatch(action);
   }

   let forNewText = props.store.getState().profilePage.newText

   return (<MyPost upDateText={onChangeText} addPost={addPost} newText={forNewText} />)
}

export default MyPostContainer
