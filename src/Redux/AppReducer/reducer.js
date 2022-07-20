const initState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const AppReducer = (state = initState, { type, payload }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
