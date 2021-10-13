import React, { Component } from 'react'
import '../../../styles/Education/Degree.css'
import AreaOfStudy from './AreaOfStudy'
import DatesAttended from './DatesAttended'
import DegreeType from './DegreeType'
import EducationPreview from './EducationPreview'
import GPA from './GPA'
import School from './School'
import uniqid from 'uniqid'

export default class Degree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            education: {
                school: '',
                areaOfStudy: '',
                degreeType: '',
                gpa: '',
                start: '',
                end: '',
            },
            degrees: []
        }
            
    }
    addDegree = (e) => {
        e.preventDefault();
        this.props.addNewEducation(<EducationPreview key={uniqid()} education={this.state.education}/>);
        this.setState({
            degrees: this.state.degrees.concat(this.state.education),
            education: {
                school: '',
                areaOfStudy: '',
                degreeType: '',
                gpa: '',
                start: '',
                end: '',
            },
        })
    }
    addSchool = (e) => {
        this.setState({
            education: {
                school: e.target.value,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: this.state.education.degreeType,
                gpa: this.state.education.gpa,
                start: this.state.education.start,
                end: this.state.education.end,
            },
        })
    }
    addMajor = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                areaOfStudy: e.target.value,
                degreeType: this.state.education.degreeType,
                gpa: this.state.education.gpa,
                start: this.state.education.start,
                end: this.state.education.end,
            },
        })
    }
    chooseDegree = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: e.target.value,
                gpa: this.state.education.gpa,
                start: this.state.education.start,
                end: this.state.education.end,
            },
        })
    }
    addGPA = (e) => {
       this.setState({
           education: {
                school: this.state.education.school,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: this.state.education.degreeType,
                gpa: e.target.value,
                start: this.state.education.start,
                end: this.state.education.end,
           },
       })
    }
    addStartDate = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: this.state.education.degreeType,
                gpa: this.state.education.gpa,
                start: e.target.value,
                end: this.state.education.end,
            },
        })
    }
    addGradDate = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: this.state.education.degreeType,
                gpa: this.state.education.gpa,
                start: this.state.education.start,
                end: e.target.value,
            },
        })
    }
    resetEducationField = (e) => {
        e.preventDefault();
        this.setState({
            education: {
                school: '',
                areaOfStudy: '',
                degreeType: '',
                gpa: '',
                start: '',
                end: '',
            },
        })
    }
    render() {
        const { school, areaOfStudy, degree, degreeType, gpa, datesAttended } = this.state.education;
        const { degrees } = this.state
        return (
            <div>
                <form className='education-style' degrees={degrees} onSubmit={this.addDegree}>
                    <School 
                        school={school} 
                        addSchool={this.addSchool}
                    />
                    <AreaOfStudy 
                        areaOfStudy={areaOfStudy} 
                        addMajor={this.addMajor}
                    />
                    <DegreeType 
                        degree={degree} 
                        degreeType={degreeType} 
                        chooseDegree={this.chooseDegree}
                    />
                    <GPA 
                        gpa={gpa} 
                        addGPA={this.addGPA}
                    />        
                    <DatesAttended 
                        datesAttended={datesAttended} 
                        addStartDate={this.addStartDate} 
                        addGradDate={this.addGradDate}
                    />
                    <button className='education-btns' type='submit'>Add</button>
                    <button className='education-btns'>Edit School</button>
                    <button className='education-btns' onClick={this.resetEducationField}>Reset</button>
                </form>
            </div>
        )
    }
}
