import React from 'react';
import D from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';



const Dialogs = (props) => {

   let NewMessages = props.dialogsPage.Messages.map(m => (<Message message={m.message} key={m.id} />));
   let NewDialog = props.dialogsPage.Dialogs.map(d => (<DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />));


   let onTextInput = (e) => {
      let text = e.target.value;
      props.textInput(text);
   }

   let onAddText = () => {
      props.addText();
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
                  <textarea onChange={onTextInput} value={props.newValue} placeholder='Напишите сообщение'/>
               </div>
               <div className={D.flex}>
                  <button onClick={onAddText} className={D.btn}>Отправить</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Dialogs
