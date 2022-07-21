import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS } from "./actionTypes";

const initState = {
  token: "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const AuthReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case AUTH_LOADING: {
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    }
    case AUTH_SUCCESS: {
      return {
        ...state,
        token: payload,
        isAuth: true,
        isLoading: false,
        isError: false,
      };
    }
    case AUTH_ERROR: {
      return {
        ...state,

        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
