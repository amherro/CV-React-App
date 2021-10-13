import React, { Component } from 'react'
import '../../../styles/Education/DatesAttended.css'

export default class DatesAttended extends Component {
    render() {
        const { start, end, addStartDate, addGradDate } = this.props;
        return (
            <div className='dates-attended-section'>
                <label className='dates-attended-label'>Please specify the dates you attended this institution.</label>
                <div className='calendar-section'>
                    <div className='began-calendar'>
                        <p className='calendar-label'>Began</p>
                        <input className='calendar' type='date' value={start} onChange={addStartDate}></input>
                    </div>
                    <div className='ended-calendar'>
                        <p className='calendar-label'>Ended</p>
                        <input className='calendar' type='date' value={end} onChange={addGradDate}></input> 
                    </div>
                </div> 
            </div>
        )
    }
}
