import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <h1> This is home </h1>
         );
    }
}

const mapStatetoProps = ({ auth }) => {
    return {
        username : auth.username,
        role: auth.role
    }
}

 
export default connect(mapStatetoProps)(Home);