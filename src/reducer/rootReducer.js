import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { payReducer } from "./payReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    pay: payReducer,
})