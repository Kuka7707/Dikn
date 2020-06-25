import React from 'react';
import MyPost from './MyPost';
import { addPostActionCreator, changeTextActionCreator, removeActionCreator } from '../../../Redux/ProfileReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
   return {
      newText: state.profilePage.newText,
      post: state.profilePage.post,
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      upDateText: (text) => { 
         let action = changeTextActionCreator(text);
         dispatch(action)
       },
      addPost: () => { 
         dispatch(addPostActionCreator()) 
      },
      remove: () => { 
         dispatch(removeActionCreator())
       }
   }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);


export default MyPostContainer
