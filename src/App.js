import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';
import Admin from './Pages/Admin';
import LandingPage from './Pages/LandingPages';
import CoursesPage from './Pages/CoursesPage';
import CourseDetail from  './Pages/CourseDetail';
import HeaderBar from './Component/HeaderBar';
import Footer from './Component/Footer';
import ManageCourses from './Pages/ManageCourses'
import { keepLogin  } from './Redux/Actions'



const App = () => {

  const dispatch = useDispatch();

  useEffect(() => dispatch(keepLogin()), []);


  return (
      <div>
            <HeaderBar /> 
                <Switch>       
                  <Route exact path='/' component={LandingPage} />
                  <Route path='/home' component={Home} />
                  <Route path='/courses' component={CoursesPage} />
                  <Route path='/course-detail/:id' component={CourseDetail} />
                  <Route path='/login' component={LoginPage} />
                  <Route path='/register' component={Register} />  
                  <Route path='/admin' component={Admin} />   
                  <Route path='/manage-courses' component={ManageCourses} />
                  <Route component={NotFound} />   
                </Switch> 
              <Footer />
      </div>
  )
}
      

//     const dispatch = useDispatch();

//     useEffect(() => dispatch(keepLogin()), []);
    
//     const user = useSelector(state => state.user)


//     if(user.role === "user"){ 
//       return (    
//           <UserRouter />
//         );

//     }if (user.role === "admin"){
//       return (    
//           <AdminRouter />
//       );
//     }
      
//       return (
//           <NonUserRouter />
//     )
// }
 

export default App;