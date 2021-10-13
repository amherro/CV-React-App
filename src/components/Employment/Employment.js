import React, { Component } from 'react'
import '../../styles/Employment/Employment.css'
import Jobs from './Job/Jobs'

export default class Employment extends Component {
    render() {
        const { employers, addNewEmployer } = this.props;
        return (
            <div className='employment-background-style'>
                <h2 className='employment-heading'>Employment History</h2>
                <Jobs employers={employers} addNewEmployer={addNewEmployer}/>
            </div>
        )
    }
}

