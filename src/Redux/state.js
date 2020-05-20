import { rerender } from "../rerender";

let state = {
   profilePage: {
      post: [
         { id: 1, text: 'Привет! калайсын? Мен уйде жатырмын! Далага шыгаснба?',},
         { id: 2, text: 'Привет! Мама жазса, маган звандасын деп айтшы! Мен номерин кетрп алыппын.',},
         { id: 3, text: "Салам! Ертен келем, бешбармак дайындап койын!",},
         { id: 4, text: 'Go Pugb || Dota',},
      ],
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
   },
   navbarFriends: {
      friends: [
         { id: '1', name: "Азамат", img: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" },
         { id: '2', name: "Дильназ", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg6MGACMuzkpSc57aTXU37DxTA9IBr3gwMjb1aJOmM7sK2Gxol&usqp=CAU' },
         { id: '3', name: "Бота", img: 'https://www.meme-arsenal.com/memes/cdee9796a1e5a92779cccc2d6486980e.jpg' },
         { id: '4', name: "Tunga", img: 'https://avatarfiles.alphacoders.com/209/209340.jpg' },
         { id: '5', name: "Жалгас", img: 'https://avatarko.ru/img/kartinka/30/igra_Dota_2_Juggernaut_29058.jpg' },
      ],
   },
}

export let addPost = (postMessage) =>{
   let newPost ={
      id:+1, text: postMessage,
   }
   state.profilePage.post.push(newPost);
   rerender(state);
};


export default state 