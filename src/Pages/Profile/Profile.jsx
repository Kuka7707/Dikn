import React from 'react'
import P from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';
import Post from './Post/Post.jsx';
import MyPostContainer from './MyPost/MyPostContainer.jsx';
import StoreContetn from '../../StoreContent';



const Profile = (props) => {
   debugger;
   
   return (
      <StoreContetn.Consumer>{
         (store) => {
            let NewPost = store.getState().profilePage.post.map(el => (<Post text={el.text} dispatch={store.dispatch} />));
            return (
               <div className={P.profile}>
                  <ProfileInfo />
                  <MyPostContainer store={store} dispatch={store.dispatch} />
                  {NewPost}
               </div>)
         }
      }
      </StoreContetn.Consumer>
   )
}

export default Profile

