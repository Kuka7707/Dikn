import React, { Component } from 'react'

export default class Profile extends Component {
   render() {
      return (
         <div className="prifile">
            <div className="prof_back">
               <img className="prof_back_img" src="https://images.pexels.com/photos/733475/pexels-photo-733475.jpeg" />
            </div>
            <div className="prof_ava">
               <img className="prof_ava_img" src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" />
            </div>
            <div className="prof_info">
               <div className="prof_info_name">Floki Vik</div>
               <div className="prof_info_descrip">
                  <div className="status">Status: Online</div>
                  <div className="city">City: Aktau</div>
               </div>
            </div>

         </div>
      )
   }
}
