import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'

import thunk from 'redux-thunk'
import { AllProductsReducer } from './Services/reducer';


const rootReducer = combineReducers({
    
    allProduct: AllProductsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer)