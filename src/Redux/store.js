import {

    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore as createStore,
  } from "redux";
  
  import thunk from "redux-thunk";
  import { AllProductsReducer } from "./Services/reducer";
  import { AuthReducer } from "./AuthReducer/reducer";
  import { AppReducer } from "./AppReducer/reducer";
  const rootReducer = combineReducers({
    allProduct: AllProductsReducer,
    AuthReducer,
    AppReducer,
  });
  
  const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  
  const enhancer = composeEnhancers(applyMiddleware(thunk));
  
  export const store = createStore(rootReducer, enhancer);


