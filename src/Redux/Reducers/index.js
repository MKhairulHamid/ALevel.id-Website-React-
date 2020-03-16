import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { courseReducer } from './CourseReducer'

export default combineReducers({
    user : userReducer,
    course : courseReducer
})
