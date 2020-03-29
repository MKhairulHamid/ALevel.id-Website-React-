import React, {useEffect} from 'react';
// import './App.css';
import './styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginPage from './Pages/LoginPage';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import LandingPage from './Pages/LandingPage/LandingPages';
import CoursesPage from './Pages/CoursesPage';
import CourseDetail from  './Pages/CourseDetail';
import HeaderBar from './Component/HeaderBar';
import Footer from './Component/Footer';
import ManageCourses from './Pages/ManageCourses';
import EnrollmentForm from './Pages/Enrollment/EnrollmentForm';
import Dashboard from './Pages/Dashboard/Dashboard';
import EnrollmentPage from './Pages/Enrollment/EnrollmentPage';
import ConfirmPayment  from './Pages/ConfirmPayment';
import MyCourses from './Pages/MyCourses/MyCourses';
import MyProfile from './Pages/MyProfile';
import ExamsSchedule from './Pages/ExamsSchedule'

import { keepLogin } from './Redux/Actions'



const App = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(keepLogin()), []);
  
  const user = useSelector(state => state.user)
  const { role } = user
  const {id} = user

  return (
      <div>
            <HeaderBar /> 
                <Switch>       
                  <Route exact path='/' component={LandingPage} />
                  <Route path='/courses' component={CoursesPage} />
                  <Route path='/course-detail/:id' component={CourseDetail} />
                  <Route path='/login' component={LoginPage} />
                  <Route path='/register' component={Register} />  
                  <Route path='/admin' component={Admin} />
                  <Route path='/enrollment' component={EnrollmentPage} />
                  <Route path='/mycourses' component={MyCourses} />
                  <Route path='/examsschedule' component={ExamsSchedule} />
                  {(role==='admin')?
                    <Route path='/manage-courses' component={ManageCourses} />
                    :
                    null
                  }
                  {(role==='admin')?
                  <Route path='/dashboard' component={Dashboard} />
                    :
                    null
                  }
                  {(role==='admin')?
                  <Route path='/confirm-payment' component={ConfirmPayment} />
                    :
                    null
                  }  
                  {
                    id?
                    <Route path='/myprofile' component={MyProfile} />
                    :
                    null
                  }
                  { id?
                    <Route path='/enrollmentform/:id' component={EnrollmentForm} />
                    :
                    null
                  }
                        
                  <Route component={NotFound} /> 
                </Switch> 
              <Footer />
      </div>
  )
}
      
 

export default App;