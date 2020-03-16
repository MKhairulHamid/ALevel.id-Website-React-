import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ID_SUCCESS,
    FETCH_DATA_FAILED
} from '../Actions/types'


const INITIAL_STATE = {
    coursesList : [],
    categories: [],
    loading: false,
    error : '',
    courseById : {}
}

export const courseReducer = (state= INITIAL_STATE, action) => {
    switch(action.type) {
        case FETCH_DATA_START : 
            return{
                ...state,
                loading: true
            }
        case FETCH_DATA_SUCCESS :
            return{
                ...state,
                coursesList : action.payload,
                loading: false
            }
        case FETCH_DATA_ID_SUCCESS :
            return{
                ...state,
                courseById : action.payload,
                loading : false
            }
        case FETCH_DATA_FAILED : 
            return{
                ...state,
                error : action.payload,
                loading: false
            }
        default :
            return state
    }
}