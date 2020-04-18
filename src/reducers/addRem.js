import { ADD_TODO, REMOVE_TODO, GET_LOCAL } from "../actions/actions"


const initialState = []

export const addRem = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_TODO):
        return [...state, action.payload]

        case(REMOVE_TODO):
        return state.filter(item => item.entry !== action.payload)
        
        case(GET_LOCAL):
        return [...action.payload]
        
        default:
            return state
    }

}