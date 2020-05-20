import React from 'react'
import P from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Post from './Post/Post.jsx';
import MyPost from './MyPost/MyPost.jsx';



const Profile = (props) => {

   let NewPost = props.state.post.map(el => (<Post text={el.text} />));
   
   return (
      <div className={P.profile}>
         <ProfileInfo />
         <MyPost addPost={props.addPost}/>
         {NewPost}
      </div>
   )
}

export default Profile

