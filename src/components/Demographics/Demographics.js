import React, { Component } from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import Phone from './Phone'

export default class Demographics extends Component {
    render() {
        return (
            <div>
                <h2>Demographics</h2>
                <form>
                    <Name />
                    <Email />
                    <Address />
                    <Phone />
                    <button type='submit'>Save</button>
                </form>
            </div>
            
            
        )
    }
}
