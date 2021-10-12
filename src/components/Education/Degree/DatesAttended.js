import React, { Component } from 'react'
import '../../../styles/Education/DatesAttended.css'

export default class DatesAttended extends Component {
    render() {
        const { datesAttended, addStartDate, addGradDate } = this.props;
        return (
            <div className='dates-attended-section'>
                <label className='dates-attended-label'>Please specify the dates you attended this institution.</label>
                <p className='calendar-label'>Began</p>
                <input className='calendar' type='date' value={datesAttended} onChange={addStartDate}></input>
                <p className='calendar-label'>Ended</p>
                <input className='calendar' type='date' value={datesAttended} onChange={addGradDate}></input>  
            </div>
        )
    }
}
