import { combineReducers } from "redux";
import  ActiveData from "./ActiveData";
import ArchiveData from "./ArchiveData";

const rootReducer = combineReducers({
    ActiveData,
    ArchiveData
})
export default  rootReducer;