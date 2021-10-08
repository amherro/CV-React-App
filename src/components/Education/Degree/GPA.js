import React, { Component } from 'react'

export default class GPA extends Component {
    render() {
        const { gpa, addGPA } = this.props;
        return (
            <div>
                <label>What was your GPA?</label>
                <input type='text' placeholder='Enter your GPA...' value={gpa} onChange={addGPA}></input>
            </div>
        )
    }
}
