import React, { Component } from 'react'

export default class Name extends Component {
    render() {
        const { name, addName } = this.props
        return (
            <div>
                <label>Full Name</label>
                <input type='text' name='name' placeholder='Enter your name...' value={name} onChange={addName}></input>
            </div>
        )
    }
}
