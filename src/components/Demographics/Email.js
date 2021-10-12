import React, { Component } from 'react'

export default class Email extends Component {
    render() {
        const { email, addEmail } = this.props
        return (
            <div>
                <label>Email</label>
                <input type='email' name='email' placeholder='Enter your email..' value={email} onChange={addEmail}></input>
            </div>
        )
    }
}
