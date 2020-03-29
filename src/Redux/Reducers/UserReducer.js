import {
    LOGIN,
    LOGOUT
} from '../Actions/types'

const INITIAL_STATE = {
    id: 0,
    firstName: null,
    lastName: '',
    email : '',
    address : '',
    role: '',
    token : '',
    verified : false
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN : 
            return {
                id: action.payload.id,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                email : action.payload.email,
                address : action.payload.address,
                token : action.payload.token,
                verified : action.payload.verified,
                role : action.payload.role
            }
        case LOGOUT : 
            return INITIAL_STATE
        default : 
            return state
    }
}
