import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, browserHistory} from 'react-router';
import {Route, BrowserRouter} from 'react-router-dom'

import App from './components/App';
import SingIn from './components/Signin';
import SingUp from './components/SignUp';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact = {true} path = '/' component = {App} />
            <Route path='/signin' component={SingIn}/>
            <Route path='/signup' component={SingUp}/>
        </div>
    </BrowserRouter>, document.getElementById('root')
)