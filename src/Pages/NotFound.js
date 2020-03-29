import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class NotFound extends Component {
    render() { 
        return ( 
            <div style={{ minHeight: '700px' }}>
                <h1 align="center">
                    Page Not Found
                </h1>
                
            </div>
                
         );
    }
}
 
export default NotFound;