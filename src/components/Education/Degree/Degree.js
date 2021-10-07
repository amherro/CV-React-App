import React, { Component } from 'react'
import AreaOfStudy from './AreaOfStudy'
import DatesAttended from './DatesAttended'
import DegreeType from './DegreeType'
import GPA from './GPA'
import Graduate from './Graduate'
import School from './School'

export default class Degree extends Component {
    render() {
        return (
            <div>
                <form>
                    <School />
                    <AreaOfStudy />
                    <DegreeType />
                    <GPA />
                    <Graduate />
                    <DatesAttended />
                    <button type='submit'>Add</button>
                    <button>Edit School</button>
                    <button>Delete School</button>
                </form>
            </div>
        )
    }
}
