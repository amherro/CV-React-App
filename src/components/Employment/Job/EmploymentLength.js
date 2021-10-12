
import React, { Component } from 'react'

export default class EmploymentLength extends Component {
    render() {
        const { length, startJobDate, endJobDate } = this.props
        return (
            <div className='employment-length-input-section'>
                <label className='employment-length-label'>Please specifiy the dates you worked for this company.</label>
                <p className='calendar-label'>Began</p>
                <input className='calendar' type='date' value={length.started} onChange={startJobDate}></input>
                <p className='calendar-label'>Ended</p>
                <input className='calendar' type='date' value={length.ended} onChange={endJobDate}></input>
            </div>
        )
    }
}
