import { createStore, combineReducers } from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import FriendsReducer from "./FriendsReducer";

let reducer = combineReducers({
   profilePage: ProfileReducer,
   dialogsPage: DialogsReducer,
   navbarFriends:FriendsReducer,
});

let store = createStore(reducer);

window.store = store;

export default store;