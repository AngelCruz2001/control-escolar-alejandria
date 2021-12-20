import { types } from '../types/types';

const initialState = {
    loading: false,
    loadingCards: false,
    msgError: null,
    openDropMenu: false,
    correct: null,
    loadingStudent: false,
}

export const uiReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload,
            }

        case types.uiSetCorrect:
            return {
                ...state,
                correct: action.payload,
            }

        case types.uiRemoveError:
            return {
                ...state,
                msgError: null,
            }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true,
            }

        case types.uiFinishLoading:
            return {
                ...state,
                loading: false,
            }

<<<<<<< HEAD
        case types.uiSetCurrent:
            return {
                ...state,
                current: action.payload,
            }

=======
            case types.uiStartLoadingCards:
                return {
                    ...state,
                    loadingCards: true,
                }
            case types.uiFinishLoadingCards:
                return {
                    ...state,
                    loadingCards: false,
                }
            case types.uiOpenDropMenu:
                return {
                    ...state,
                    openDropMenu: true,
                }
            case types.uiCloseDropMenu:
                return {
                    ...state,
                    openDropMenu: false,
                }
    
            case types.uiStartLoadingStudents:
                return {
                    ...state,
                    loadingStudent: true
                }
            case types.uiFinishLoadingStudents:
                return {
                    ...state,
                    loadingStudent: false
                }
        
>>>>>>> origin/payments
        default:
            return state;
    }

}