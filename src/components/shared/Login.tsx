import React from 'react';


export default class Login extends React.Component {
    state = {
        username: ''
    }
    mySubmitHandler = (event: any) => {
        event.preventDefault();
        alert("You are submitting " + this.state.username);
    }
    myChangeHandler = (event: any) => {
        this.setState({ username: event.target.value });
    }
    render() {
        return (
            <div className="container">
                <h1>Login form</h1>
                <form onSubmit={this.mySubmitHandler}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.myChangeHandler} type="text" id="email" name="email" placeholder="Your email.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col-75">
                            <input type="password" id="password" name="password" placeholder="Your password.." />
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