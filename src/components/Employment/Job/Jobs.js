import React, { Component } from 'react'
import Company from './Company'
import Duties from './Duties'
import EmploymentLength from './EmploymentLength'
import Position from './Position'

export default class Jobs extends Component {
    render() {
        return (
            <div>
                <form>
                    <Company />
                    <Position />
                    <Duties />
                    <EmploymentLength />
                </form>
            </div>
        )
    }
}
