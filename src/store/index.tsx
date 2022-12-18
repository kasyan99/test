import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";


const rootReducer = combineReducers({
   profileReducer,
   usersReducer
})

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never

export type RootReducer = typeof rootReducer

export type AppState = ReturnType<RootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppDispatch = typeof store.dispatch
