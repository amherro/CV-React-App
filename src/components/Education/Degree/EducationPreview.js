import React, { Component } from 'react'


export default class EducationPreview extends Component {
    render() {
        const { school, areaOfStudy, degreeType, gpa, start, end } = this.props.education;
        return (
            <div className='education-preview-info'>
                <h3 className='attended-preview'>{start} - {end}</h3>
                <h1 className='school-preview'>{school}</h1>
                <h2 className='degree-preview'>{degreeType} in {areaOfStudy}</h2>
                <h3 className='gpa-preview'>GPA: {gpa}</h3>
            </div> 
        )
    }
}
