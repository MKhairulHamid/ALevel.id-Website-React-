import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import App from './App';
import Reducer from './Redux/Reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-web-vector-icons/fonts';


const storeReducer = createStore(Reducer, {}, applyMiddleware(ReduxThunk) )

ReactDOM.render(
<Provider store={storeReducer}>
    <BrowserRouter>
         <App />
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
