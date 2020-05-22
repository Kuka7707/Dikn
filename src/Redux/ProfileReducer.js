const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const REMOVE = 'REMOVE';

let initialState = {
   post: [
      { id: 0, text: 'Привет! калайсын? Мен уйде жатырмын! Далага шыгаснба?', },
      { id: 1, text: 'Привет! Мама жазса, маган звандасын деп айтшы! Мен номерин кетрп алыппын.', },
      { id: 2, text: "Салам! Ертен келем, бешбармак дайындап койын!", },
   ],
   newText: '',
}

const ProfileReducer = (state = initialState, action) => {
   switch(action.type){
      case ADD_NEW_POST :
         let newPost = {
            id: 5, text: state.newText,
         }
         state.post.push(newPost);
         state.newText = "";
         return state;
      
      case UPDATE_TEXT :
         state.newText = action.newText;
         return state;
      
      case REMOVE :
         state.post.pop();
         return state;

      default :
         return state;
   }
}

export const addPostActionCreator = () => ({ type:ADD_NEW_POST })

export const changeTextActionCreator = (text) => ({type:UPDATE_TEXT, newText:text,})

export const removeActionCreator = () =>({type: REMOVE})


export default ProfileReducer