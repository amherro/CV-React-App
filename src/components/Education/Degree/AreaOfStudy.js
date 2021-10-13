import React, { Component } from 'react'
import '../../../styles/Education/AreaOfStudy.css'

export default class AreaOfStudy extends Component {
    render() {
        const { areaOfStudy, addMajor } = this.props
        return (
            <div className='major-input-section'>
                <label className='major-label'>Area of Study</label>
                <input className='major-input' type='text' value={areaOfStudy} onChange={addMajor}></input>
            </div>
        )
    }
}
