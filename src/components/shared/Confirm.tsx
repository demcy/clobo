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
            //console.log('ddddddddddddddd' + message)
            //this.setState({ post: true, message })
            this.setState({ post: true, message })
            //console.log('dsfsdfsdfsfsfsfsdddddddddddddddddddddddddd')
        }
    }
    render() {
        return (

            <div className="container">
                <h1>Register confirmation</h1>
                {this.state.post
                    ? <>
                        <p>{this.state.message}</p>
                        <strong>You should register again</strong>
                    </>
                    : <p>Please check your email to confirm your account.</p>}
            </div>
        )
    }
}