import React, { Component } from 'react'

export default class Position extends Component {
    render() {
        const { position, addTitle } = this.props
        return (
            <div>
                <label>Position Title</label>
                <input type='text' value={position} onChange={addTitle}></input>
            </div>
        )
    }
}