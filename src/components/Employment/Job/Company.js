import React, { Component } from 'react'

export default class Company extends Component {
    render() {
        const { company } = this.props
        return (
            <div>
                <label>Company Name</label>
                <input type='text' value={company}></input>
            </div>
        )
    }
}
