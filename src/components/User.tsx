import React from 'react';

import { IUser } from "../domain/IUser"
import { UserApi } from '../services/UserApi';

interface IProps {
    users: IUser[]
}
interface IState {
    users: IUser[]
}

export default class User extends React.Component<IProps> {

    state: IState = {
        users: this.props.users
    }

    async componentDidMount() {
        const data = await UserApi.getAll();
        console.log(data)
        this.setState({ users: data })
        console.log(this.state.users)
    }

    render() {
        return (
            <table >
                <tbody>
                    {this.state.users.map(user => (
                        <tr key={user.email}>
                            <td style={{ width: '90%', paddingLeft: '5%' }}>
                                <td> {user.email}</td >
                            </td>
                            <td style={{ textAlign: 'center' }}>{user.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
