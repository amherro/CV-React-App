import React, { Component } from 'react'
import '../../styles/Demographics/Name.css'

export default class Name extends Component {
    render() {
        const { name, addName } = this.props
        return (
            <div className='name-input-section'>
                <label className='name-label'>Full Name</label>
                <input className='name-input' type='text' name='name' value={name} onChange={addName}></input>
            </div>
        )
    }
}
