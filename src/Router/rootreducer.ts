import { combineReducers } from "redux";
import { LikeDataReducer } from "./reducer";
import { NotificationReducer } from "./reducer";
import { SalaryReducer } from "./reducer";
// export default combineReducers
// (
//     {LikeDataReducer,NotificationReducer,SalaryReducer}
    
// )

const rootReducer = combineReducers({ LikeDataReducer,NotificationReducer,SalaryReducer });

export default rootReducer