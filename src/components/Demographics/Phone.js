import React, { Component } from 'react'

export default class Phone extends Component {
    render() {
        return (
            <div>
                <label>Phone Number</label>
                <input type='tel' placeholder='(xxx) xxx-xxxx'></input>
            </div>
        )
    }
}
