
import { GET_TODO } from './../actions/actions';

const initialState = {
    entry: '',
    categ: ''
}

export const todoGetter = (state = initialState, action) => {
    switch (action.type) {
        case (GET_TODO):
           return (
               {
                   entry: action.payload.entry,
                   categ: action.payload.categ
               }
           )
            default:
                return state

    }
}