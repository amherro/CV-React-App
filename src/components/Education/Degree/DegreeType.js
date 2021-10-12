import React, { Component } from 'react'
import '../../../styles/Education/DegreeType.css'

export default class DegreeType extends Component {
    render() {
        const { degreeType, chooseDegree } = this.props
        return (
            <div className='degree-type-input-section'>
                <label className='degree-type-label'>What type of degree did you receive? (Ex: Bachelors, Masters, etc.)</label>
                <input className='degree-type-input' value={degreeType} onChange={chooseDegree}></input>
            </div>
        )
    }
}
