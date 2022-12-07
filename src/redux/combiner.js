import {combineReducers} from "redux";
import counterReducer from "./reducer";

const allReducers = combineReducers({
    counterReducer
});
export default allReducers;