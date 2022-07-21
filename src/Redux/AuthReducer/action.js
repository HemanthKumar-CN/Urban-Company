import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS } from "./actionTypes";

export const verify = (confirmationResult, pin) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  confirmationResult
    .confirm(pin)
    .then((result) => {
      // User signed in successfully.
      const user = result.user;
      //   console.log(user.uid);
      dispatch({ type: AUTH_SUCCESS, payload: user.uid });
    })
    .catch((error) => {
      // User couldn't sign in (bad verification code?)
      dispatch({ type: AUTH_ERROR });
      // ...
    });
};
