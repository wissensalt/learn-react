import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import listReducer from "./ListReducer"

//root reducer
const rootReducer = combineReducers({
    list: listReducer
});

export default createStore(rootReducer, composeWithDevTools());