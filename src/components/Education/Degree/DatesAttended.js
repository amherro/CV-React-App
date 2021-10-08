import React, { Component } from 'react'

export default class DatesAttended extends Component {
    render() {
        const { datesAttended, addStartDate, addGradDate } = this.props;
        return (
            <div>
                <label>Please specify the dates you attended this institution.</label>
                <p>Began</p>
                <input type='date' value={datesAttended} onChange={addStartDate}></input>
                <p>Ended</p>
                <input type='date' value={datesAttended} onChange={addGradDate}></input>  
            </div>
        )
    }
}
