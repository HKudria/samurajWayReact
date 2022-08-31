import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReduce from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducerCombine = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReduce,
    sidebarPage: sidebarReducer
})

const store = createStore(reducerCombine)

export default store