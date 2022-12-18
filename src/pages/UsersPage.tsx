import React, { useEffect, useReducer, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useAppSelector } from '../hooks/useAppSelector'
import { setUsersThunk, User } from '../store/users-reducer'
import classes from './UsersPage.module.css'

function UsersPage() {
   const users: User[] = useAppSelector(state => state.usersReducer.users)
   const dispatch = useDispatch<any>()

   const input = useRef<HTMLInputElement>(null)
   const focus = () => {
      input.current?.focus()
   }

   type Action = { type: 'INC' } | { type: 'DEC' }
   type State = { count: number }
   const reducer = (state: State, action: Action): State => {
      switch (action.type) {
         case 'INC':
            return { count: state.count + 1 }
         case 'DEC':
            return { count: state.count - 1 }
         default:
            return state

      }
   }

   const location = useLocation()

   console.log('location', location);

   const [state, dspatch] = useReducer(reducer, { count: 0 })
   return (
      <div className={classes.users}>
         Users
         <input ref={input} />
         <button onClick={focus}>focus</button>
         <button onClick={() => dispatch(setUsersThunk)}>get users</button>

         <button onClick={() => dspatch({ type: 'INC' })}>INC</button>
         <button onClick={() => dspatch({ type: 'DEC' })}>DEC</button>
         <div>{state.count}</div>
         <ul>
            {users.map(u => <li>{u.name}</li>)}
         </ul>
      </div>
   )
}

export default UsersPage
