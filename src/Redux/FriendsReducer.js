
let initialState = {
   friends: [
      { id: '1', name: "Азамат", img: "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" },
      { id: '2', name: "Дильназ", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg6MGACMuzkpSc57aTXU37DxTA9IBr3gwMjb1aJOmM7sK2Gxol&usqp=CAU' },
      { id: '3', name: "Бота", img: 'https://www.meme-arsenal.com/memes/cdee9796a1e5a92779cccc2d6486980e.jpg' },
      { id: '4', name: "Tunga", img: 'https://avatarfiles.alphacoders.com/209/209340.jpg' },
      { id: '5', name: "Жалгас", img: 'https://s.starladder.com/uploads/user_logo/2/b/5/a/838e05b4cef6917e7438ce2f8e43d0b4.jpg' },
      { id: '6', name: "Нуркен", img: 'https://img.freepik.com/free-vector/pitbull_20684-121.jpg?size=338&ext=jpg' },
   ],
}

const FriendsReducer = (state = initialState, action) => {
   switch(action.type){
      default:
         return state;
   }
}

export default FriendsReducer
