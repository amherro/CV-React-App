import React, { Component } from 'react'
import '../../../styles/Education/Graduate.css'

export default class Graduate extends Component {
    render() {
        const { toggleGraduation } = this.props
        return (
            <div className='graduate-input-section'>
                <label className='graduate-label'>Did you graduate from this institution?</label>
                <input className='graduate-input' type='checkbox' name='Yes' onClick={toggleGraduation}></input>
                
            </div>
        )
    }
}
