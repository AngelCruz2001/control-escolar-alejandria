import { types } from "../types/types";

const initialState = {
    idExpenseType: null,
    expenses: [],
    dataInputs: {
        description: '',
        amount: 0,
    },
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



        default:
            return state;
    }
}

