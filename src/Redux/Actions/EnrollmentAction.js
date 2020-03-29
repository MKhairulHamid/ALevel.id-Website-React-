import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import { 
    FETCH_ENROLLMENT_START, 
    FETCH_ENROLLMENT_SUCCESS,
    FETCH_ENROLLMENT_ID_SUCCESS,
    FETCH_ENROLLMENT_FAILED,
    FETCH_UNPAID_ENROLLMENT_SUCCESS,
    FETCH_PAID_ENROLLMENT_SUCCESS,
    FETCH_MYCOURSES_SUCCESS
} from './types'

export const fetchEnrollmentById = (id) => {
    return(dispatch) => {
        dispatch({
            type : FETCH_ENROLLMENT_START
        })
        Axios.get(`${API_URL}/enrollment/getbyid/${id}`)
            .then((res) => {
                dispatch({
                    type : FETCH_ENROLLMENT_ID_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type : FETCH_ENROLLMENT_FAILED
                })
            })
    }
}
export const fetchUnpaidEnrollment = () => {
    return(dispatch) => {
        dispatch({
            type : FETCH_ENROLLMENT_START
        })
        Axios.get(`${API_URL}/enrollment/getunpaid`)
            .then((res) => {
                dispatch({
                    type : FETCH_UNPAID_ENROLLMENT_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type : FETCH_ENROLLMENT_FAILED
                })
            })
    }
}

export const fetchPaidEnrollment = () => {
    return(dispatch) => {
        dispatch({
            type : FETCH_ENROLLMENT_START
        })
        Axios.get(`${API_URL}/enrollment/getpaid`)
            .then((res) => {
                dispatch({
                    type : FETCH_PAID_ENROLLMENT_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type : FETCH_ENROLLMENT_FAILED
                })
            })
    }
}

export const fetchMyCourses = (id) => {
    return(dispatch) => {
        dispatch({
            type : FETCH_ENROLLMENT_START
        })
        Axios.get(`${API_URL}/enrollment/mycourses/${id}`)
            .then((res) => {
                dispatch({
                    type : FETCH_MYCOURSES_SUCCESS,
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type : FETCH_ENROLLMENT_FAILED
                })
            })
    }
}

