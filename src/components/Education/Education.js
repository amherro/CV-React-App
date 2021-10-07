import React, { Component } from 'react'
import Degree from './Degree/Degree'

export default class Education extends Component {
    render() {
        return (
            <div>
                <h2>Education</h2>
                <Degree />
                <button>Add Another School</button>
            </div>
        )
    }
}
