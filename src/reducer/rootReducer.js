import { combineReducers } from "redux"
import { authReducer } from "./authReducer"
import { documentReducer } from "./documentReducer"
import { payReducer } from "./payReducer"
import { uiReducer } from "./uiReducer"
import { studentReducer } from "./studentReducer"
import { requestsReducer } from "./requestsReducer"
import { gradesReducer } from "./gradesReducer"
import { expensesReducer } from "./expensesReducer"
import { teacherReducer } from "./teacherReducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    student: studentReducer,
    pay: payReducer,
    document: documentReducer,
    requests: requestsReducer,
    grades: gradesReducer, 
    expenses: expensesReducer,
    teacher: teacherReducer,
})