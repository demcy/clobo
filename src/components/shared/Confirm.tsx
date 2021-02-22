import React from 'react';
import { UserApi } from '../../services/UserApi';
export default class Confirm extends React.Component {
    state = {
        post: false,
        message: ''
    }
    async componentDidMount() {
        const confirmURL = new URL(window.location.href);
        if (confirmURL.searchParams.has('token')) {
            const message = await UserApi.confirm(confirmURL.searchParams.get('token')!)
            console.log(message)
            this.setState({ post: true, message })
            
        }
    }
    render() {
        return (
            <div className="container">
                <h1>Register confirmation</h1>
                {this.state.post
                    ? <p>{this.state.message}</p>
                    : <p>Please check your email to confirm your account</p>}
            </div>
        )
    }
}