import React, { Component } from 'react'

export default class Name extends Component {
    render() {
        const { name } = this.props
        return (
            <div>
                <label>Full Name</label>
                <input type='text' placeholder='Enter your name...' value={name}></input>
            </div>
        )
    }
}
