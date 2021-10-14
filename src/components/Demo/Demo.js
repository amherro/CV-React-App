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
                    <div>{employers}</div>
                </div>
            </div>
        )
    }
}