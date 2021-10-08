import React, { Component } from 'react'

export default class Email extends Component {
    render() {
        const { email } = this.props
        return (
            <div>
                <label>Email</label>
                <input type='email' placeholder='Enter your email..' value={email}></input>
            </div>
        )
    }
}
