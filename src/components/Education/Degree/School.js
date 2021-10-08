import React, { Component } from 'react'

export default class School extends Component {
    render() {
        const { school, addSchool } = this.props
        return (
            <div>
                <label>School Name</label>
                <input type='text' placeholder='Enter school name...' value={school} onChange={addSchool}></input>
            </div>
        )
    }
}
