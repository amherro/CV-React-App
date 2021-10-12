import React, { Component } from 'react'
import '../../../styles/Employment/Position.css'

export default class Position extends Component {
    render() {
        const { position, addTitle } = this.props
        return (
            <div className='position-input-section'>
                <label className='position-label'>Position Title</label>
                <input className='position-input' type='text' value={position} onChange={addTitle}></input>
            </div>
        )
    }
}
