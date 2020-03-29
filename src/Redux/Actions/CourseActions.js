import Axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_ID_SUCCESS,
    FETCH_DATA_FAILED
} from './types'

export const fetchCourse = () => {
    return(dispatch) => {
        dispatch({
            type : FETCH_DATA_START
        })

        Axios.get(`${API_URL}/courses/getall`)
        .then((res) => {
            dispatch({
                type : FETCH_DATA_SUCCESS,
                payload : res.data
            })
        
        })
        .catch((err) => {
            dispatch({
                type : FETCH_DATA_FAILED
            })
            
        })
    }
}

export const fetchCourseById = (id) => {
    return(dispatch) => {
        dispatch({
            type: FETCH_DATA_START
        })
        Axios.get(`${API_URL}/courses/getbyid/${id}`)
        .then((res) => {
            let data = res.data[0]
            dispatch({
                type : FETCH_DATA_ID_SUCCESS,
                payload : data
            })
        })
        .catch((err) => {
            dispatch({
                type : FETCH_DATA_FAILED
            })
        })
    }
}