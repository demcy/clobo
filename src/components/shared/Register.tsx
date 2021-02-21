import React from 'react';
import { UserApi } from '../../services/UserApi';


export default class Register extends React.Component {
    state = {
        email: '',
        password: '',
        validate: ''
    }
    async submitHandler(event: any){
        event.preventDefault();
        const message = await UserApi.register(this.state.email, this.state.password)
        if(message === 'User created a new account with password'){
            window.location.pathname = '/Confirm'
        }
        if(message === 'User email is already in use'){
            this.setState({validate: message})
        }
    }
    
    emailHandler = (event: any) => {
        this.setState({ email: event.target.value, validate: '' });
        //console.log(this.state.email)
        //console.log( event.target.value)
    }
    passHandler = (event: any) => {
        this.setState({ password: event.target.value });
        //console.log(this.state.password)
        //console.log( event.target.value)
    }
    render() {
        return (
            <div className="container">
                <h1>Register form</h1>
                <p>{this.state.validate}</p>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.emailHandler} type="email" id="email" name="email" placeholder="Your email.." autoFocus autoComplete="on" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.passHandler} type="password" minLength={6} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)(?!.*\s).+$" title="Password must contain at least 6 characters, including upper, lowercase, numbers and symbols" id="password" name="password" placeholder="Your password.." />
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div >
        );
    }
}