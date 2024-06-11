import { combineReducers } from "redux";
import fetchDataReducer from './fetchDataReducer';
import toDoReducer from './todoReducer';

export default combineReducers({
    fetchDataReducer,
    toDoReducer
})