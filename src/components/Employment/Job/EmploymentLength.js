
import React, { Component } from 'react'

export default class EmploymentLength extends Component {
    render() {
        return (
            <div>
                <lable>Please specifiy the dates you worked for this company.</lable>
                <p>Began</p>
                <input type='date'></input>
                <p>Ended</p>
                <input type='date'></input>
            </div>
        )
    }
}
