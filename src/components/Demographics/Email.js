import React, { Component } from 'react'

export default class Email extends Component {
    render() {
        return (
            <div>
                <label>Email</label>
                <input type='email' placeholder='Enter your email..'></input>
            </div>
        )
    }
}
