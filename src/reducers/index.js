import { combineReducers } from "redux";
import { addRem } from './addRem';

export const rootReducer = combineReducers({
    todos: addRem,
})