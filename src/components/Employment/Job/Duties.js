import React, { Component } from 'react'
import '../../../styles/Employment/Duties.css'

export default class Duties extends Component {
    render() {
        const { duties, addJobDuties } = this.props
        return (
            <div className='duties-input-section'>
                <label className='duties-label'>What were your main duties in this positon?</label>
                <textarea className='duties-input' cols='50' rows='20' placeholder='Explain the duties you performed in this position...' value={duties} onChange={addJobDuties}></textarea>
            </div>
        )
    }
}
