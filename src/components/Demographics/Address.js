import React, { Component } from 'react'

export default class Address extends Component {
    render() {
        const { address } = this.props
        return (
            <div>
                <label>Address</label>
                <input type='text' placeholder='Enter your current address...' value={address}></input>
            </div>
        )
    }
}
