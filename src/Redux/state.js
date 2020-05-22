import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import FriendsReducer from "./FriendsReducer";

let store = {
   _state: {
      profilePage: {
         post: [
            { id: 0, text: 'Привет! калайсын? Мен уйде жатырмын! Далага шыгаснба?', },
            { id: 1, text: 'Привет! Мама жазса, маган звандасын деп айтшы! Мен номерин кетрп алыппын.', },
            { id: 2, text: "Салам! Ертен келем, бешбармак дайындап койын!", },
            { id: 3, text: 'Go Pugb || Dota', },
         ],
         newText: '',
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
         newMessage: '',
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
      this._state.profilePage = ProfileReducer(this._state.profilePage ,action);
      this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action);
      this._state.navbarFriends = FriendsReducer(this._state.navbarFriends, action);

      this._rerender(this._state);
   },
}






export default store

window.store = store