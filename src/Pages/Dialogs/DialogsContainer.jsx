import React from 'react';
import { textInputActionCreator, addTextActionCreator } from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';
import StoreContetn from '../../StoreContent';




const DialogsContainer = (props) => {
   return (
      <StoreContetn.Consumer>{
         (store) => {
            let textInput = (text) => {
               store.dispatch(textInputActionCreator(text));
            }

            let dialogsPage = store.getState().dialogsPage;
            let newValue = dialogsPage.newMessage;

            let addText = () => {
               store.dispatch(addTextActionCreator());
            }
            return (<Dialogs dialogsPage={dialogsPage} addText={addText} textInput={textInput} newValue={newValue} />)
         }
      }
      </StoreContetn.Consumer>)
}

export default DialogsContainer
