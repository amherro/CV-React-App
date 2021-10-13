import React, { Component } from 'react'
import '../../../styles/Employment/EmploymentLength.css'

export default class EmploymentLength extends Component {
    render() {
        const { length, startJobDate, endJobDate } = this.props
        return (
            <div className='employment-length-input-section'>
                <label className='employment-length-label'>Please specifiy the dates you worked for this company.</label>
                <div className='employment-calendar'>
                    <div className='start-calendar'>
                        <p className='calendar-label'>Began</p>
                        <input className='calendar' type='date' value={length.started} onChange={startJobDate}></input>
                    </div>
                    <div className='end-calendar'>
                        <p className='calendar-label'>Ended</p>
                        <input className='calendar' type='date' value={length.ended} onChange={endJobDate}></input>
                    </div>
                </div>
            </div>
        )
    }
}
