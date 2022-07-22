import {
  SERVICE_FAILURE,
  SERVICE_REQUEST,
  SERVICE_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  services: [],
};

export const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SERVICE_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case SERVICE_SUCCESS: {
      return {
        ...state,
        services: payload,
        isLoading: false,
        isError: false,
      };
    }

    case SERVICE_FAILURE: {
      return {
        ...state,
        isError: true,
      };
    }

    default: {
      return state;
    }
  }
};
