import React, { Component } from 'react'
import '../../../styles/Education/Schools.css'

export default class School extends Component {
    render() {
        const { school, addSchool } = this.props
        return (
            <div className='school-input-section'>
                <label className='school-label'>School Name</label>
                <input className='school-input' type='text' value={school} onChange={addSchool}></input>
            </div>
        )
    }
}
