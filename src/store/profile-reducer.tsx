import { InferValueTypes } from "."

const SET_NAME = 'SET-NAME'
const SET_LOCATION = 'SET-LOCATION'

const initialStates = {
   name: 'andrii',
   location: {
      city: 'kyiv',
      country: 'ukraine'
   }
}

type Location = {
   city: string
   country: string
}
type State = typeof initialStates


const profileReducer = (state = initialStates, action: Actions): State => {
   switch (action.type) {
      case SET_NAME:
         return { ...state, name: action.payload.name }
      case SET_LOCATION:
         return { ...state, location: { ...action.payload.location } }
      default:
         return state
   }
}

export const actions = {
   setName: (name: string) => {
      return { type: SET_NAME, payload: { name } } as const
   },
   setLocation: (location: Location) => {
      return { type: SET_LOCATION, payload: { location } } as const
   },
}

export type Actions = ReturnType<InferValueTypes<typeof actions>>
export default profileReducer