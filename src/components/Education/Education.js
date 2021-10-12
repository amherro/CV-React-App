import React, { Component } from 'react'
import Degree from './Degree/Degree'

export default class Education extends Component {
    render() {
        const { schools, addNewEducation } = this.props
        return (
            <div style={educationStyle}>
                <h2>Education</h2>
                <Degree schools={schools} addNewEducation={addNewEducation}/>
            </div>
        )
    }
}
const educationStyle = {
    marginLeft: '75px'
}
