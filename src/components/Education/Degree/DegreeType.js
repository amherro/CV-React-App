import React, { Component } from 'react'

export default class DegreeType extends Component {
    render() {
        const { degreeType, chooseDegree } = this.props
        return (
            <div>
                <label>What type of degree did you receive? (Ex: Bachelors, Masters, etc.)</label>
                <input value={degreeType} onChange={chooseDegree}></input>
            </div>
        )
    }
}
