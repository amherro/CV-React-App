import React, { Component } from 'react'

export default class DatesAttended extends Component {
    render() {
        return (
            <div>
                <label>Please specify the dates you attended this institution.</label>
                <p>Began</p>
                <input type='date'></input>
                <p>Ended</p>
                <input type='date'></input>  
            </div>
        )
    }
}
