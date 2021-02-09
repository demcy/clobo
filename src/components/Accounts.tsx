import React from 'react';

import { IAccounts } from "../domain/IAccounts"

interface IProps {
    accounts: IAccounts[]
}

export default class Accounts extends React.Component<IProps> {
    render() {
        return (
            <table >
                <tbody>
                    {this.props.accounts.map(account => (
                        <tr key={account.email}>
                            <td style={{ width: '90%', paddingLeft: '5%' }}>
                                <td> {account.email}</td >
                            </td>
                            <td style={{ textAlign: 'center' }}>{account.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}
