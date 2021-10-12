
import React, { Component } from 'react'

export default class EmploymentLength extends Component {
    render() {
        const { length, startJobDate, endJobDate } = this.props
        return (
            <div>
                <label>Please specifiy the dates you worked for this company.</label>
                <p>Began</p>
                <input type='date' value={length.started} onChange={startJobDate}></input>
                <p>Ended</p>
                <input type='date' value={length.ended} onChange={endJobDate}></input>
            </div>
        )
    }
}
