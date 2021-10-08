import React, { Component } from 'react'

export default class AreaOfStudy extends Component {
    render() {
        const { areaOfStudy, addMajor } = this.props
        return (
            <div>
                <label>Area of Study</label>
                <input type='text' placeholder='Enter area of study...' value={areaOfStudy} onChange={addMajor}></input>
            </div>
        )
    }
}
