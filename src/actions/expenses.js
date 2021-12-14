import Swal from "sweetalert2"
import { fetchConToken } from "../helpers/fetch"
import { types } from "../types/types"

export const expenseStartCreateRequest = () => {
    return async (dispatch, getState) => {
        const { expenses } = getState();
        console.log({
            observation: expenses.dataInputs.observation,
            amount: expenses.dataInputs.amount,
            expense_type: expenses.idExpenseType,
            id_user: getState().auth.user.id_user
        })
        try {
            const res = await fetchConToken(`expenses`,
                {
                    observation: expenses.dataInputs.observation,
                    amount: expenses.dataInputs.amount,
                    expense_type: expenses.idExpenseType,
                    id_user: getState().auth.user.id_user
                }, 'POST'
            )
            const body = await res.json()

            if (body.ok) {
                console.log(body)
                Swal.fire({
                    title: "Solicitudes",
                    text: body.msg,
                    icon: 'success',
                })
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }

            dispatch(expensesClearData())
        } catch (error) {
            console.log(error)
            console.log("Error de backend")
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}


export const expensesStartGetExpenses = (filter = "all") => {
    return async (dispatch, getState) => {
        try {

            const res = await fetchConToken(`expenses/?${filter}`, 'GET')
            const body = await res.json()
            if (body.ok) {
                console.log(body)
                dispatch(expensesSetExpenses(body.expenses))
            } else {
                console.log(body)
                Swal.fire({
                    title: '¡Oops!',
                    text: body.msg,
                    icon: 'question',
                })
            }
        } catch (error) {
            console.log("Error de backend")
            console.log(error)
            Swal.fire('Error', 'Hablar con el administrador', 'error')
        }
    }
}
export const expensesSetDataInputs = (data) => ({ type: types.expensesSetDataInputs, payload: data })
export const expenseSetTypeExpense = (idExpense) => ({ type: types.expenseSetTypeExpenses, payload: idExpense })
export const expensesSetExpenses = (expenses) => ({ type: types.expensesSetExpenses, payload: expenses })
const expensesClearData = () => ({ type: types.expensesClearData })