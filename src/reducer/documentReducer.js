import {types} from '../types/types';

const initialState = {
    active: null,
    idRequest: null
}

export const documentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.documentSetActive:
            return {
                ...state,
                active: action.payload,
            }
        
        case types.documentSetDocument:
            return {
                ...state,
                idRequest: action.payload,
            }

        case types.documentClearActive:
            return {
                ...state,
                active: null
            }
            
        case types.documentClearData:
            return {
                initialState
            }
    
        default:
            return state;
    }
}