import { types } from "../types/types";

const initialState = {
    data: [],

}

export const gradesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.feedGetData:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }

}
