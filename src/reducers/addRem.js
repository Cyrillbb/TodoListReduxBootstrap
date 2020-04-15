import { ADD_TODO, REMOVE_TODO } from "../actions/actions"


const initialState = []

export const addRem = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_TODO):
        return [...state, action.payload]

        case(REMOVE_TODO):
        return state.filter(item => state.indexOf(item) !== -1)
        
        default:
            return state
    }

}