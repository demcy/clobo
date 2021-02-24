import React from 'react';
import { UserApi } from '../../services/UserApi';

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        validate: '',
        action: false,
        forget: false
    }
    async submitHandler(event: any) {
        event.preventDefault();
        const message = await UserApi.login(this.state.email, this.state.password)
        this.setState({ validate: message })
        if (message === 'Please check your email to confirm your account') {
            this.setState({ action: true })
        }
        if (message === 'Your password is incorrect') {
            this.setState({ action: true, forget: true })
        }
        // this.props.getToken(data)

        //document.cookie = 'token=' + data + ';SameSite=Strict; Secure' //; HttpOnly' //; HttpOnly'
        //document.cookie = 'token=data; {SameSite=None, HttpOnly}'  //Secure; HttpOnly'

        //console.log(data)
        //window.location.pathname = '/User'
        // if(data !== ''){

        // }
    }
    emailHandler = (event: any) => {
        this.setState({ email: event.target.value });
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
                <h1>Login form</h1>
                <p>{this.state.validate}</p>
                <form onSubmit={this.submitHandler.bind(this)}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.emailHandler} type="text" id="email" name="email" placeholder="Your email.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.passHandler} type="password" id="password" name="password" placeholder="Your password.." />
                        </div>
                    </div>
                    <div className="row">
                        {this.state.action
                            ? <div className="col-50">
                                {this.state.forget
                                ? <input type="submit" value="Reset password" />
                                : <input type="submit" value="Send me again" />}
                            </div>
                            : null}
                        <div className="col-50 right">
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div >
        );
    }
}