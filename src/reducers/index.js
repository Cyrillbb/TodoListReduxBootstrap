import { combineReducers } from "redux";
import { addRem } from './addRem';
import { todoGetter } from './todoGetter';

export const rootReducer = combineReducers({
    todos: addRem,
    todo: todoGetter
})