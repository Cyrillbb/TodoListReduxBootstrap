//action types
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'

//action creators

export const add = (todo, type) => {
    return {
        type: ADD_TODO,
        payload: {
            entry: todo,
            type: type
        }
    }
}

export const remove = (todo) => {
    return {
        type: REMOVE_TODO,
        payload: todo
    }
}