import React from 'react';
import D from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

   let NewMessages = props.state.Messages.map(m => (<Message message={m.message} />));
   let NewDialog = props.state.Dialogs.map(n => (<DialogItem name={n.name} id={n.id} img={n.img} />));


   let newText = React.createRef();

   let textInput = () => {
      let text = newText.current.value;
      props.GoText(text);
   }

   let addText = () => {
      let text = newText.current.value;
      props.addDialogText(text);
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
                  <textarea ref={newText} onChange={textInput} value={props.state.newMessage} />
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
