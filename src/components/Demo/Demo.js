import React, { Component } from 'react'

export default class Demo extends Component {
    render() {
        return (
            <div>
                <div className='demographics'>
                    <h3>Name</h3>
                    <h3>Email</h3>
                    <h3>Address</h3>
                    <h3>Phone</h3>
                </div>
                <div className='education'>
                    <h3>School</h3>
                    <h3>Area of Study</h3>
                    <h3>Degree</h3>
                    <h3>GPA</h3>
                    <h3>Graduate</h3>
                    <h3>Dates Attended</h3>
                </div>
                <div className='work_history'>
                    <h3>Company</h3>
                    <h3>Positon</h3>
                    <h3>Duties</h3>
                    <h3>Employment Length</h3>
                </div>
            </div>
        )
    }
}
