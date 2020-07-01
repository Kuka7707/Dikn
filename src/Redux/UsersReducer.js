const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
   users: [
      // { id: 0, photoUrl: 'https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg', Follow: true, Online: true, Name: 'Азамат', Status: 'Лечу домой!', location: { city: 'Москва', country: 'Россия', } },
      // { id: 1, photoUrl: 'https://i.pinimg.com/originals/bb/d6/51/bbd651a8c10cf9bf1b7970d1d26b0566.png', Follow: true, Online: false, Name: 'Бахтияр', Status: 'в Астане гуляю!', location: { city: 'Актау', country: 'Казахстан', } },
      // { id: 2, photoUrl: 'https://img.freepik.com/free-vector/young-man-avatar-cartoon-character-profile-picture_18591-55058.jpg?size=338&ext=jpg', Follow: false, Online: true, Name: 'Данияр', Status: 'Коронавирус ЗБ!', location: { city: 'Актау', country: 'Казахстан', } },
      // { id: 3, photoUrl: 'https://www.meme-arsenal.com/memes/cdee9796a1e5a92779cccc2d6486980e.jpg', Follow: true, Online: true, Name: 'Бота', Status: 'Блиин!!! Кашан арыктайм!!!', location: { city: 'Нур-Султан', country: 'Казахстан', } },
      // { id: 4, photoUrl: 'https://avatarfiles.alphacoders.com/209/209340.jpg', Follow: false, Online: false, Name: 'Тунга', Status: 'Соттайм', location: { city: 'Нукус', country: 'Калпакстан', } },
      // { id: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg6MGACMuzkpSc57aTXU37DxTA9IBr3gwMjb1aJOmM7sK2Gxol&usqp=CAU', Follow: true, Online: true, Name: "Дильназ", Status: 'Плавчиха!!!)))', location: { city: 'Нур-Султан', country: 'Казахстан', }   },
      // { id: 6, photoUrl: 'https://s.starladder.com/uploads/user_logo/2/b/5/a/838e05b4cef6917e7438ce2f8e43d0b4.jpg', Follow: false, Online: true, Name: 'Жалгас', Status: 'GO DOTA2', location: { city: 'Актау', country: 'Казахстан', } },
      // { id: 7, photoUrl: 'https://img.freepik.com/free-vector/pitbull_20684-121.jpg?size=338&ext=jpg', Follow: false, Online: false, Name: 'Нуркен', Status: 'пиу пиу', location: { city: 'Актау', country: 'Казахстан', } },
   ],
}

const UsersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, follow: true }
               }
               return u
            })
         }
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, follow: false }
               }
               return u
            })
         }
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         }
      default:
         return state;
   }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })




export default UsersReducer