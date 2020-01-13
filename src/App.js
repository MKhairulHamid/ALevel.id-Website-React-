import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/LoginPage';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';
import LearningProgress from './Pages/LearningProgress';
import LearningResources from './Pages/LearningResources';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import { connect } from 'react-redux';
import Axios from 'axios';
import { API_URL } from './support/API_URL'



class App extends Component {

  componentDidMount() {
    let username = localStorage.getItem('username')
    if(username){
      Axios.get(API_URL +  `/users?username=${username}`)
      .then((res) =>{
        this.props.Login(res.data[0])
      })
    }
  }

  render() { 
    return ( 
      <div>
        <NavBar>
          <Switch>
            <Route path='/' component={Home} exact />
            {/* <Route path='/login' component={LoginPage} />
            <Route path='/register' component={Register} />
            <Route path='/admin' component={Admin} />
            <Route path='learning-progress' component={LearningProgress} />
            <Route path='learning-resources' component={LearningResources} />
            <Route path='*' component={NotFound} /> */}
          </Switch>
        </NavBar>
      </div>
     );
  }
}
 
export default connect(null, { Login }) (App);