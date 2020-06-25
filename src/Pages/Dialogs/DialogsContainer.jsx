import React from 'react';
import { textInputActionCreator, addTextActionCreator } from '../../Redux/DialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';




// const DialogsContainer = (props) => {
//    return (
//       <StoreContetn.Consumer>{
//          (store) => {
//             let textInput = (text) => {
//                store.dispatch(textInputActionCreator(text));
//             }

//             let dialogsPage = store.getState().dialogsPage;
//             let newValue = dialogsPage.newMessage;

//             let addText = () => {
//                store.dispatch(addTextActionCreator());
//             }
//             return (<Dialogs dialogsPage={dialogsPage} addText={addText} textInput={textInput} newValue={newValue} />)
//          }
//       }
//       </StoreContetn.Consumer>)
// }


let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
      // newValue:dialogsPage.newMessage
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
