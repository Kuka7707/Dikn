import { createStore, combineReducers } from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import FriendsReducer from "./FriendsReducer";
import UsersReducer from "./UsersReducer";

let reducer = combineReducers({
   profilePage: ProfileReducer,
   dialogsPage: DialogsReducer,
   navbarFriends:FriendsReducer,
   usersPage: UsersReducer,
});

let store = createStore(reducer);

window.store = store;

export default store;