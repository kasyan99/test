import { Dispatch } from "redux";
import { InferValueTypes } from ".";

const SET_USERS = 'SET-USERS'

export interface Geo {
   lat: string;
   lng: string;
}
export interface Address {
   street: string;
   suite: string;
   city: string;
   zipcode: string;
   geo: Geo;
}
export interface Company {
   name: string;
   catchPhrase: string;
   bs: string;
}
export interface User {
   id: number;
   name: string;
   username: string;
   email: string;
   address: Address;
   phone: string;
   website: string;
   company: Company;
}
type State = {
   users: User[]
}
const initialState: State = {
   users: []
}

const usersReducer = (state = initialState, action: UserActions): State => {
   switch (action.type) {
      case SET_USERS:
         return { ...state, users: [...action.payload.users] }
      default:
         return state
   }
}

export const userActions = {
   setUsers: (users: User[]) => {
      return { type: SET_USERS, payload: { users } }
   }
}


export const setUsersThunk = async (dispatch: Dispatch<UserActions>) => {

   try {
      const json = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await json.json()
      console.log('users', data);

      dispatch(userActions.setUsers(data))
   } catch (error) {
      console.log(error)

   }
}
export type UserActions = ReturnType<InferValueTypes<typeof userActions>>

export default usersReducer