const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const REMOVE = 'REMOVE';
const GO_TEXT = 'GO-TEXT';
const ADD_DIALOG_TEXT = 'ADD-DIALOG-TEXT';


let store = {
   _state: {
      profilePage: {
         post: [
            { id: 0, text: 'Привет! калайсын? Мен уйде жатырмын! Далага шыгаснба?', },
            { id: 1, text: 'Привет! Мама жазса, маган звандасын деп айтшы! Мен номерин кетрп алыппын.', },
            { id: 2, text: "Салам! Ертен келем, бешбармак дайындап койын!", },
            { id: 3, text: 'Go Pugb || Dota', },
         ],
         newText: 'Go Pubg Bota',
      },
      dialogsPage: {
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
         newMessage: 'Напиши текст',
      },
      navbarFriends: {
         friends: [
            { id: '1', name: "Азамат", img: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" },
            { id: '2', name: "Дильназ", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg6MGACMuzkpSc57aTXU37DxTA9IBr3gwMjb1aJOmM7sK2Gxol&usqp=CAU' },
            { id: '3', name: "Бота", img: 'https://www.meme-arsenal.com/memes/cdee9796a1e5a92779cccc2d6486980e.jpg' },
            { id: '4', name: "Tunga", img: 'https://avatarfiles.alphacoders.com/209/209340.jpg' },
            { id: '5', name: "Жалгас", img: 'https://avatarko.ru/img/kartinka/30/igra_Dota_2_Juggernaut_29058.jpg' },
            { id: '6', name: "Нуркен", img: 'https://vk.vkfaces.com/638324/v638324362/30021/Y2H6JP-GvAA.jpg' },
         ],
      },
   },
   getState() {
      return (
         this._state
      );
   },
   _rerender() {
      console.log('clone');
   },
   subscribe(observer) {
      this._rerender = observer;
   },
   dispatch(action) {
      if (action.type === ADD_NEW_POST) {
         let newPost = {
            id: 5, text: this._state.profilePage.newText,
         }
         this._state.profilePage.post.push(newPost);
         this._state.profilePage.newText = ""

         this._rerender();
      } else if (action.type === UPDATE_TEXT) {
         this._state.profilePage.newText = action.newText;
         this._rerender();
      } else if(action.type === REMOVE){
         this._state.profilePage.post.pop();

         this._rerender();
      } else if (action.type === ADD_DIALOG_TEXT) {
         let newMessage = {
            message: this._state.dialogsPage.newMessage,
         }
         this._state.dialogsPage.Messages.push(newMessage);
         this._state.dialogsPage.newMessage = ""

         this._rerender();
      } else if (action.type === GO_TEXT) {
         this._state.dialogsPage.newMessage = action.newMessage;
         this._rerender();
      }
   },
}

export const addPostActionCreator = () => ({ type:ADD_NEW_POST })

export const changeTextActionCreator = (text) => ({type:UPDATE_TEXT, newText:text,})

export const removeActionCreator = () =>({type: REMOVE})

export const textInputActionCreator = (text)=>({type: GO_TEXT, newMessage:text})

export const addTextActionCreator = () => ({type:ADD_DIALOG_TEXT})



export default store

window.store = store