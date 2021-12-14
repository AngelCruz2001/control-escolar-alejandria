import { types } from "../types/types";

const initialState = {
    grades: [],
}

export const gradesReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.gradesSetGrades:
            return {
                ...state,
                grades: action.payload
            }

        default:
            return state;
    }

}
