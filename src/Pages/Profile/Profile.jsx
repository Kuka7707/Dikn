import React from 'react'
import P from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Post from './Post/Post.jsx';
import MyPostContainer from './MyPost/MyPostContainer.jsx';



const Profile = (props) => {
   debugger;
   let NewPost = props.store.getState().profilePage.post.map(el => (<Post text={el.text} dispatch={props.store.dispatch} />));
   return (
      <div className={P.profile}>
         <ProfileInfo />
         <MyPostContainer store={props.store} dispatch={props.store.dispatch} />
         {NewPost}
      </div>
   )
}

export default Profile

