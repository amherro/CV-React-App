import React, { Component } from 'react'
import Company from './Company'
import Duties from './Duties'
import EmploymentLength from './EmploymentLength'
import Position from './Position'

export default class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: '',
            position: '',
            duties: '',
            length: {
                started: '',
                ended: '',
            },
        }
    }
    render() {
        const { company, position, duties, length } = this.state;
        return (
            <div>
                <form>
                    <Company company={company}/>
                    <Position position={position}/>
                    <Duties duties={duties}/>
                    <EmploymentLength length={length}/>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}
