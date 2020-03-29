import { combineReducers } from 'redux';
import { userReducer } from './UserReducer';
import { courseReducer } from './CourseReducer';
import { enrollmentReducer } from './EnrollmentReducer'

export default combineReducers({
    user : userReducer,
    course : courseReducer,
    enrollment : enrollmentReducer
})
