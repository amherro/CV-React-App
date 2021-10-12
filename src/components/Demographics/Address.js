import React, { Component } from 'react'

export default class Address extends Component {
    render() {
        const { address, addAddress } = this.props
        return (
            <div>
                <label>Address</label>
                <input type='text' name='address' placeholder='Enter your current address...' value={address} onChange={addAddress}></input>
            </div>
        )
    }
}
