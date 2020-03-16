import React, { Component } from 'react';
import { connect } from 'react-redux';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
                <div>
                    <h1>
                        Ini Halaman Home
                    </h1>
                </div>
          
         );
    }  
}

const mapStatetoProps = ({ nama }) => {
    return {
        nama : nama      
    }
}

 
export default connect(mapStatetoProps)(Home);