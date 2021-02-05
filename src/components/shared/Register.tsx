import React from 'react';


export default class Register extends React.Component {
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
                <h1>Hello {this.state.username}</h1>
                <form onSubmit={this.mySubmitHandler}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="fname">First Name</label>
                        </div>
                        <div className="col-75">
                            <input onChange={this.myChangeHandler} type="text" id="fname" name="firstname" placeholder="Your name.." />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
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