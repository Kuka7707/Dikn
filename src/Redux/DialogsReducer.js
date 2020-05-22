const GO_TEXT = 'GO-TEXT';
const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';


let initialState = {
   Dialogs: [
      { id: '1', name: "Азамат", img: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" },
      { id: '2', name: "Дильназ", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg6MGACMuzkpSc57aTXU37DxTA9IBr3gwMjb1aJOmM7sK2Gxol&usqp=CAU' },
      { id: '3', name: "Бота", img: 'https://www.meme-arsenal.com/memes/cdee9796a1e5a92779cccc2d6486980e.jpg' },
      { id: '4', name: "Tunga", img: 'https://avatarfiles.alphacoders.com/209/209340.jpg' },
   ],
   Messages: [
      { message: 'Hi' },
      { message: 'respect' },
      { message: 'GO GO! GO' },
   ],
   newMessage: '',
}

const DialogsReducer = (state = initialState, action) => {

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
