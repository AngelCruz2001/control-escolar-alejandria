import { types } from "../types/types";

const initialState = {
  active: null,
  idRequest: null,
  activeRequests: []
};

export const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.requestSetActive:
      return {
        ...state,
        idRequest: action.payload,
      };

    case types.requestSetStudent:
      return {
        ...state,
        active: action.payload,
      };

    case types.requestSetHistory:
      return {
        ...state,
        activeRequests: action.payload,
      };

    // case types.requestDelete:
    //   return {
    //     ...state,
    //     activeRequests: state.activeRequests.filter(request => request.idReq !== state.activeRequests )
    //   };

    case types.requestClearActive:
      return {
        ...state,
        active: null,
      };

    case types.requestClearData:
      return {
        ...state,
        active: null,
        idRequest: null,
      };

    default:
      return state;
  }
};
