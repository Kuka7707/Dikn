import React from 'react';
import D from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import {textInputActionCreator, addTextActionCreator} from '../../Redux/DialogsReducer';



const Dialogs = (props) => {

   let NewMessages = props.state.Messages.map(m => (<Message message={m.message} />));
   let NewDialog = props.state.Dialogs.map(n => (<DialogItem name={n.name} id={n.id} img={n.img} />));


   let textInput = (e) => {
      let text = e.target.value;
      props.dispatch(textInputActionCreator(text));
   }

   let addText = () => {
      props.dispatch(addTextActionCreator());
   }

   return (
      <div className={D.di}>
         <div className={D.di_items}>
            {NewDialog}
         </div>
         <div className={D.di_messeges}>
            <div className={D.ready}>
               {NewMessages}
            </div>
            <div className={D.addMessage}>
               <div>
                  <textarea onChange={textInput} value={props.state.newMessage} placeholder='Напишите сообщение'/>
               </div>
               <div className={D.flex}>
                  <button onClick={addText} className={D.btn}>Отправить</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs
