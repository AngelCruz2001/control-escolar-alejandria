import {types} from "../types/types"

const initialValue = {

    assistanceDates:[]
}

export const assistanceReducer = ( state = initialValue, action ) => {
    switch ( action.type ) {
        
        case types.assistanceSetActive:
            return{
                ...state,
                assistanceDates: action.payload
            }
            
        default:
            return state;
    }
}