import React, { Component } from 'react'
import '../../../styles/Employment/Company.css'

export default class Company extends Component {
    render() {
        const { company, addCompanyName } = this.props
        return (
            <div className='company-input-section'>
                <label className='company-label'>Company Name</label>
                <input className='company-input' type='text' value={company} onChange={addCompanyName}></input>
            </div>
        )
    }
}
