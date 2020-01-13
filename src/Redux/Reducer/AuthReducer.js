const INITIAL_STATE = {
    id:0,
    username:'',
    email: '',
    role: '',
    cart:[]
}

export const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                role: action.payload.role,
                cart: action.payload.cart
            }
        case 'LOGOUT' :
            return INITIAL_STATE
        
        default:
            return INITIAL_STATE
    }
}