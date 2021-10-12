import React, { Component } from 'react'
import '../../styles/Demographics/Address.css'

export default class Address extends Component {
    render() {
        const { address, addAddress } = this.props
        return (
            <div className='address-input-section'>
                <label className='address-label'>Address</label>
                <input className='address-input' type='text' name='address' placeholder='Enter your current address...' value={address} onChange={addAddress}></input>
            </div>
        )
    }
}
