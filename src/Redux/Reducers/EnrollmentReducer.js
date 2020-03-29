import { 
    FETCH_ENROLLMENT_START, 
    FETCH_ENROLLMENT_SUCCESS,
    FETCH_ENROLLMENT_ID_SUCCESS,
    FETCH_ENROLLMENT_FAILED,
    FETCH_UNPAID_ENROLLMENT_SUCCESS,
    FETCH_PAID_ENROLLMENT_SUCCESS,
    FETCH_MYCOURSES_SUCCESS
} from '../Actions/types'

const INITIAL_STATE = {
    all : [],
    byUserId :[],
    unpaid : [],
    paid : [],
    mycourses : [],
    loading: false,
    error : ''
}

export const enrollmentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FETCH_ENROLLMENT_START :
            return{
                ...state,
                loading:true
            }
        case FETCH_ENROLLMENT_SUCCESS :
            return{
                ...state,
                enrollmentList : action.payload,
                loading: false
            }
        case FETCH_ENROLLMENT_ID_SUCCESS :
            return{
                ...state,
                byUserId : action.payload,
                loading : false
            }
        case FETCH_UNPAID_ENROLLMENT_SUCCESS :
            return{
                ...state,
                unpaid : action.payload,
                loading : false
            }
        case FETCH_PAID_ENROLLMENT_SUCCESS :
            return{
                ...state,
                paid : action.payload,
                loading : false
            }
        case FETCH_MYCOURSES_SUCCESS :
            return{
                ...state,
                mycourses : action.payload,
                loading : false
            }
        case FETCH_ENROLLMENT_FAILED : 
            return{
                ...state,
                error : action.payload,
                loading : false
            }
        default :
            return state
    }
}