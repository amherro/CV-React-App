import React, { Component } from 'react'
import Jobs from './Job/Jobs'

export default class Employment extends Component {
    render() {
        const { employers, addNewEmployer } = this.props;
        return (
            <div style={employmentsStyle}>
                <h2>Employment History</h2>
                <Jobs employers={employers} addNewEmployer={addNewEmployer}/>
                <button>Add Another Job</button>
            </div>
        )
    }
}

const employmentsStyle = {
    gridColumn: '1',
    marginLeft: '75px'
}
