import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { documentReducer } from "./documentReducer"
import { payReducer } from "./payReducer"
import { uiReducer } from "./uiReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    pay: payReducer,
    document: documentReducer,
})