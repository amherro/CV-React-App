import React, { Component } from 'react'

export default class Duties extends Component {
    render() {
        const { duties, addJobDuties } = this.props
        return (
            <div>
                <label>What were your main duties in this positon?</label>
                <textarea cols='50' rows='20' placeholder='Explain the duties you performed in this position...' value={duties} onChange={addJobDuties}></textarea>
            </div>
        )
    }
}
