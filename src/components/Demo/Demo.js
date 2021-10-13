import React, { Component } from 'react';
import '../../styles/Demo/Demo.css'

export default class Demo extends Component {
    render() {
        const { demographics, schools, employers } = this.props;
        return (
            <div className='preview-section'>
                <div className='demographics-preview'>
                    <h1 className='name-preview'>{demographics[0]}</h1>
                    <div className='contact-info'>
                        <p>{demographics[1]}</p>
                        <p>{demographics[2]}</p>
                        <p>{demographics[3]}</p>
                    </div>
                </div>
                <div className='education-preview'>
                    <h1 className='education-preview-title'>Education</h1>
                    <div>{schools}</div>
                </div>
                <div className='employment-preview'>
                    <h1 className='employment-preview-title'>Work Experience</h1>
                    <div className='employment-preview-info'>
                        <h1 className='company-preview'>{employers[0]}</h1>
                        <h2 className='position-preview'>{employers[1]}</h2>
                        <h3 className='duties-preview'>{employers[2]}</h3>
                        <h3 className='employment-length-preview'>{employers[3]} - {employers[4]}</h3>
                    </div>
                </div>
            </div>
        )
    }
}