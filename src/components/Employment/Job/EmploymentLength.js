
import React, { Component } from 'react'

export default class EmploymentLength extends Component {
    render() {
        const { length } = this.props
        return (
            <div>
                <lable>Please specifiy the dates you worked for this company.</lable>
                <p>Began</p>
                <input type='date' value={length.started}></input>
                <p>Ended</p>
                <input type='date' value={length.ended}></input>
            </div>
        )
    }
}
