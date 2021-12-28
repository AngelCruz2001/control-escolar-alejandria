import { types } from "../types/types";

const initialState = {
    idExpenseType: null,
    expenses: [],
    dataInputs: {
        observation: '',
        amount: '',
    },
    activeExpense: {},
};


export const expensesReducer = (state = initialState, action) => {


    switch (action.type) {
        case types.expenseSetTypeExpenses:
            return {
                ...state,
                idExpenseType: action.payload
            };

        case types.expensesSetExpenses:
            return {
                ...state,
                expenses: action.payload
            };
        case types.expensesSetDataInputs:
            return {
                ...state,
                dataInputs: action.payload
            };
        case types.expensesClearData:
            return initialState;

        case types.expensesSetActive:
            return {
                ...state,
                activeExpense: action.payload,
                dataInputs: {
                    observation: action.payload.observation,
                    amount: action.payload.amount,
                },
                idExpenseType: action.payload.id_expense,
            };

        case types.expensesDeleteExpense:
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id_expense !== action.payload)
            };

        default:
            return state;
    }
}

