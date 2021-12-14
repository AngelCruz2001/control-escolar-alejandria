import { types } from '../types/types';

const initialState = {
    idDocument: null
}

export const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.documentSetDocument:
            return {
                ...state,
                idDocument: action.payload,
            }

        case types.documentClearData:
            return {
                ...initialState
            }

        default:
            return state;
    }
}