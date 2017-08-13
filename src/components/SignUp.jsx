import React, {Component} from 'react';
import {firebaseApp} from "../firebase";

class SingUp extends Component {

    constructor(props) {
        super(props)

        //コンポーネントで保持するデータを定義
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    //SignUpのヘルパーメソッド
    signUp() {
        console.log('this.state', this.state);
        const {email, password} = this.state;
        //Email, Passwordでユーザ登録
        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .catch(error => {
                this.setState({error});
            })
    }

    render() {
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>SingUp</h2>
                <div className="from-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        style={{marginRight:'5px'}}
                        onChange={
                            event =>
                                this.setState(
                                    {email: event.target.value}
                                )
                        }
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        style={{marginRight:'5px'}}
                        onChange={
                            event =>
                                this.setState(
                                    {password: event.target.value}
                                )
                        }
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        //signUp のヘルパーメソッドをアタッチ
                        onClick={() => this.signUp()}
                    >
                        Sign Up
                    </button>
                </div>
                <div>{this.state.error.message}</div>
            </div>
        )
    }
}

export default SingUp;