import React from 'react';
import { UserApi } from '../../services/UserApi';
export default class Confirm extends React.Component {
    state = {
        email: 'la',
        password: ''
    }
    async componentDidMount(){
        const confirmURL = new URL(window.location.href);
        
        if(confirmURL.searchParams.has('email') && confirmURL.searchParams.has('token')){
            const data = await UserApi.confirm(confirmURL.searchParams.get('email')!,confirmURL.searchParams.get('token')!)
        }
        
        console.log(window.location.href)
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