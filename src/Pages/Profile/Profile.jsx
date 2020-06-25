import React from 'react'
import P from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import MyPostContainer from './MyPost/MyPostContainer.jsx';
import store from '../../Redux/redux-store';




const Profile = () => {
   return (
      <div className={P.profile}>
         <ProfileInfo />
         <MyPostContainer />
      </div>
   )
}
export default Profile

