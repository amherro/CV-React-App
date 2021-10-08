import React, { Component } from 'react'
import Jobs from './Job/Jobs'

export default class Employment extends Component {
    render() {
        return (
            <div>
                <h2>Employment History</h2>
                <Jobs />
                <button>Add Another Job</button>
            </div>
        )
    }
}
