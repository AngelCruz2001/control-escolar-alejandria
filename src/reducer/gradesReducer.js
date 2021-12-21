import { types } from "../types/types";

const initialState = {
    data: [],
}

export const gradesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.gradesSetGrades:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;
    }

}
