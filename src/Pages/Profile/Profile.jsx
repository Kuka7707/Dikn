import React from 'react'
import P from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Post from './Post/Post.jsx';
import MyPost from './MyPost/MyPost.jsx';



const Profile = (props) => {

   let NewPost = props.profilePage.post.map(el => (<Post text={el.text} dispatch={props.dispatch} />));
   
   return (
      <div className={P.profile}>
         <ProfileInfo />
         <MyPost newText={props.profilePage.newText} dispatch={props.dispatch}/>
         {NewPost}
      </div>
   )
}

export default Profile

