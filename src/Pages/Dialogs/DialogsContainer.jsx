import React from 'react';
import {textInputActionCreator, addTextActionCreator} from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';




const DialogsContainer = (props) => {

   let textInput = (text) => {
      props.store.dispatch(textInputActionCreator(text));
   }

   let dialogsPage = props.store.getState().dialogsPage;
   let newValue = dialogsPage.newMessage;

   let addText = () => {
      props.store.dispatch(addTextActionCreator());
   }

   return (<Dialogs dialogsPage={dialogsPage} addText={addText} textInput={textInput} newValue={newValue}/>)
}

export default DialogsContainer
