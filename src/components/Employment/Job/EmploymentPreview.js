import React, { Component } from 'react'

export default class EmploymentPreview extends Component {
    render() {
        const { company, position, duties, started, ended } = this.props.job;
        return (
            <div className='employment-preview-info'>
                <h1 className='company-preview'>{company}</h1>
                <h2 className='position-preview'>{position}</h2>
                <h3 className='duties-preview'>{duties}</h3>
                <h3 className='employment-length-preview'>{started} - {ended}</h3>
            </div>
        )
    }
}
