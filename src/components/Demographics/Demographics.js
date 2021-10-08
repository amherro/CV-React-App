import React, { Component } from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import Phone from './Phone'

export default class Demographics extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            address: '',
            phone: '',
        }
    }
    render() {
        const { name, email, address, phone } = this.state;
        return (
            <div>
                <h2>Demographics</h2>
                <form>
                    <Name name={name}/>
                    <Email email={email}/>
                    <Address address={address}/>
                    <Phone phone={phone}/>
                    <button type='submit'>Save</button>
                </form>
            </div>
            
            
        )
    }
}
