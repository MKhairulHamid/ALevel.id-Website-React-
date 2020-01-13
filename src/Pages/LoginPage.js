import React, { Component } from 'react';
import {Login} from 'react-redux';
import { connect } from 'tls';

class LoginPage extends Component {
    state = { 
        error: false
     }
    render() { 
        if(this.props.username){
            <Redirect to='/'>

            </Redirect>
        }
        return (
            <h1> Ini halaman Login</h1>
          );
    }
}
 
const mapStatetoProps = ({ auth }) => {
    return{
        username: auth.username
    }
}

export default connect(mapStatetoProps, { Login }) (LoginPage);