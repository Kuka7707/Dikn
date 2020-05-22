const GO_TEXT = 'GO-TEXT';
const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';


const DialogsReducer = (state, action) => {

   switch(action.type){
      case ADD_DIALOG_TEXT :
         let newMessage = {
            message:state.newMessage,
         }
         state.Messages.push(newMessage);
         state.newMessage = "";
         return state;
      
      case GO_TEXT :
         state.newMessage = action.newMessage;
         return state;

      default: 
         return state;
   }
}


export const textInputActionCreator = (text)=>({type: GO_TEXT, newMessage:text})

export const addTextActionCreator = () => ({type:ADD_DIALOG_TEXT})


export default DialogsReducer
