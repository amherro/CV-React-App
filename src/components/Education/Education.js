import React, { Component } from 'react'
import '../../styles/Education/Degree.css'
import Degree from './Degree/Degree'

export default class Education extends Component {
    render() {
        const { schools, addNewEducation } = this.props
        return (
            <div className='education-background-style'>
                <h2 className='education-heading'>Education</h2>
                <Degree schools={schools} addNewEducation={addNewEducation}/>
            </div>
        )
    }
}

