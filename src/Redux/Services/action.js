import axios from 'axios'

export const GET_ALLPRODUCT_DATA_REQUEST = "GET_ALLPRODUCT_DATA_REQUEST"
export const GET_ALLPRODUCT_DATA_SUCCESS = "GET_ALLPRODUCT_DATA_SUCCESS"
export const GET_ALLPRODUCT_DATA_FAILURE = "GET_ALLPRODUCT_DATA_FAILURE"

export const ADD_REQUEST = "ADD_REQUEST"
export const ADD_SUCCESS = "ADD_SUCCESS"
export const ADD_FAILURE = "ADD_FAILURE"



export const getAllProductsDataRequest = () => ({
    type: GET_ALLPRODUCT_DATA_REQUEST
})

export const getAllProductsDataSuccess = (data) => ({
    type: GET_ALLPRODUCT_DATA_SUCCESS,
    payload: data
})

export const getAllProductsDataFailure = () => ({
    type: GET_ALLPRODUCT_DATA_FAILURE
})

export const getAllProducts = (payload) => (dispatch) => {

    dispatch(getAllProductsDataRequest())
    axios.get("http://localhost:8080/Service_page_data")
        .then((res) => { dispatch(getAllProductsDataSuccess(res.data)) })
        .catch((err) => { dispatch(getAllProductsDataFailure()) })
}




export const addRequest = () => ({
    type: ADD_REQUEST
})

export const addSuccess = (data) => ({
    type: ADD_SUCCESS,
    payload: data
})

export const addFailure = () => ({
    type: ADD_FAILURE
})

export const addProducts = (payload) => (dispatch) => {

    dispatch(addRequest())
    axios.post("http://localhost:8080/cart",payload)
        .then((res) => { dispatch(addSuccess(res.data)) })
        .catch((err) => { dispatch(addFailure()) })
}