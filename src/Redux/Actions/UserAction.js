import axios from 'axios';
import { API_URL } from '../../Support/API_URL';
import { LOGIN, LOGOUT } from './types'
import { stringLiteralTypeAnnotation } from '@babel/types';

export const Login = (email, password) => {
    return(dispatch) => {
        axios.post(API_URL+ '/users/login', {
            email,
            password
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        })
        .catch((err) => {
            localStorage.removeItem('token')
            console.log(err)
            dispatch({
                type: LOGOUT
            })
        })
    }
}


export const keepLogin = () => {
    return(dispatch) => {
        const token = localStorage.getItem('token'); 
        if(token){
            const headers = {
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            }
            axios.post(API_URL + '/users/keepLogin', {}, headers)
            .then((res) => {
                dispatch({
                    type: LOGIN,
                    payload: res.data
                })
            }).catch((err) => {
                dispatch({
                    type: LOGOUT
                })
            })
        }
    }
}


export const Register = (data) => {    
   
    return async (dispatch) => {     
        await axios.post(API_URL + '/users/register', data)
            .then((res) => {
                
                localStorage.setItem('token', res.data.token)
                dispatch(keepLogin())
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: LOGOUT
                })
            })
    }
}

export const Logout = () => {
    return{
        type : LOGOUT
    }
}