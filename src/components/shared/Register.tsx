import React from 'react';
import { UserApi } from '../../services/UserApi';


export default class Register extends React.Component {
    state = {
        email: '',
        password: ''
    }
    async submitHandler(event: any){
        event.preventDefault();
        //console.log(this.state.email)
        // console.log(this.state.password)
        
        await UserApi.register(this.state.email, this.state.password)
        console.log('data')
        
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
                <h1>Register form</h1>
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
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div >
        );
    }
}