//action types
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const GET_TODO = 'GET_TODO'

//action creators

export const add = (todo, type) => {
    return {
        type: ADD_TODO,
        payload: {
            entry: todo,
            categ: type
        }
    }
}

export const remove = (todo) => {
    return {
        type: REMOVE_TODO,
        payload: todo
    }
}

export const getTodo = (entry, categ) => {
    return {
        type: GET_TODO,
        payload: {
            entry: entry,
            categ: categ,
        }
    }
}