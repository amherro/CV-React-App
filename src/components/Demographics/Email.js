import React, { Component } from 'react'
import '../../styles/Demographics/Email.css'

export default class Email extends Component {
    render() {
        const { email, addEmail } = this.props
        return (
            <div className='email-input-section'>
                <label className='email-label'>Email</label>
                <input className='email-input' type='email' name='email' placeholder='Enter your email..' value={email} onChange={addEmail}></input>
            </div>
        )
    }
}
