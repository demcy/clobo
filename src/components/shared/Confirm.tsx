import React from 'react';
import { UserApi } from '../../services/UserApi';
export default class Confirm extends React.Component {
    state = {
        email: 'la',
        password: ''
    }
    async componentDidMount(){
        const data = await UserApi.confirm()
        console.log(window.location.search)
        const params = new URLSearchParams(window.location.search);
        console.log(params.get('token'))
        this.setState({email: params.get('token')})
    }
    render() {
        return (
            <div className="container">
                <h1>Register confirmation</h1>
                <p>Please check your email to confirm your account.</p>
                <p>{this.state.email}</p>
            </div>
        )
    }
}