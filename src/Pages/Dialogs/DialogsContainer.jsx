import React from 'react';
import { textInputActionCreator, addTextActionCreator } from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      newValue:state.dialogsPage.newMessage,
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      addText: () => { dispatch(addTextActionCreator()); },
      textInput: (text) => { dispatch(textInputActionCreator(text)); }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer
