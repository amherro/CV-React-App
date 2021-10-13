import React, { Component } from 'react'
import '../../../styles/Education/GPA.css'

export default class GPA extends Component {
    render() {
        const { gpa, addGPA } = this.props;
        return (
            <div className='gpa-input-section'>
                <label className='gpa-label'>What was your GPA?</label>
                <input className='gpa-input' type='text' value={gpa} onChange={addGPA}></input>
            </div>
        )
    }
}
