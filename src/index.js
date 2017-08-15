import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom'


//自作のコンポーネント
import App from './components/App';
import SingIn from './components/Signin';
import SingUp from './components/SignUp';

import {firebaseApp} from "./firebase"

//全てのアクセスはこのファイルを上から順に通っているので、ここでログイン状態が確認できる。
//ユーザがログインしているか判別してる
firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('user has signed in or up', user);
    } else {
        console.log(('user has signed out or still needs to sign in.'))
    }
})

ReactDOM.render(
//各ページへのリンクを指定
    <BrowserRouter>
        <div>
            <Route exact={true} path='/' component={App}/>
            <Route path='/signin' component={SingIn}/>
            <Route path='/signup' component={SingUp}/>
        </div>
    </BrowserRouter>, document.getElementById('root')
)