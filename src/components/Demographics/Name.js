import React, { Component } from 'react'

export default class Name extends Component {
    render() {
        return (
            <div>
                <label>Full Name</label>
                <input type='text' placeholder='Enter your name...'></input>
            </div>
        )
    }
}
