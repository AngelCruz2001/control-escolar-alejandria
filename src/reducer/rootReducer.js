import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { payReducer } from "./payReducer"
import { requestReducer } from "./requestReducer"
import { studentReducer } from "./studentReducer"
import { uiReducer } from "./uiReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    student: studentReducer,
    pay: payReducer,
    request: requestReducer,
})