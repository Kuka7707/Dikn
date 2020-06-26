import { connect } from "react-redux";
import Users from "./Users";
import {followAC, unFollowAC, setUsersAC} from '../../Redux/UsersReducer'

let mapStateToProps = (state) => {
   return{
      users:state.usersPage.users
   }
}

let mapDispatchToProps = (dispatch) => {
   return{
      follow: (userId) => {
         dispatch(followAC(userId))
      },
      unFollow: (userId) => {
         dispatch(unFollowAC(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersAC(users))
      }
   }

}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UserContainer