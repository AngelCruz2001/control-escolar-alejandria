import { types } from "../types/types";

const initialState = {
  loading: false,
  msgError: null,
  correct: null,
  current: 0,
  isModalOpen: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msgError: action.payload,
      };

    case types.uiSetCorrect:
      return {
        ...state,
        correct: action.payload,
      };

    case types.uiRemoveError:
      return {
        ...state,
        msgError: null,
      };

    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };

    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };

    case types.uiStartLoadingCards:
      return {
        ...state,
        loadingCards: true,
      };
    case types.uiFinishLoadingCards:
      return {
        ...state,
        loadingCards: false,
      };

    case types.uiSetCurrent:
      return {
        ...state,
        current: action.payload,
      };
    case types.uiIsModalOpen:
      return {
        ...state,
        isModalOpen: action.payload,
      };

    case types.uiIsShowHistoryOpen:
      return {
        ...state,
        isShowHistoryOpen: action.payload,
      };

    default:
      return state;
  }
};
