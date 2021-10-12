import React, { Component } from 'react'
import '../../../styles/Education/Degree.css'
import AreaOfStudy from './AreaOfStudy'
import DatesAttended from './DatesAttended'
import DegreeType from './DegreeType'
import GPA from './GPA'
import Graduate from './Graduate'
import School from './School'

export default class Degree extends Component {
    constructor(props) {
        super(props);

        this.state = {
            education: {
                school: '',
                areaOfStudy: '',
                degreeType: '',
                gpa: '',
                graduate: false,
                datesAttended: {
                    start: '',
                    end: '',
                }
            },
            degrees: []
        }
            
    }
    addDegree = (e) => {
        e.preventDefault();
        this.props.addNewEducation([this.state.education.school, this.state.education.areaOfStudy, this.state.education.degreeType, this.state.education.gpa, this.state.education.graduate, this.state.education.datesAttended.start, this.state.education.datesAttended.end]);
        this.setState({
            degrees: this.state.degrees.concat(this.state.education),
            education: {
                school: '',
                areaOfStudy: '',
                degreeType: '',
                gpa: '',
                graduate: false,
                datesAttended: {
                    start: '',
                    end: '',
                }
            },
        })
    }
    addSchool = (e) => {
        this.setState({
            education : {
                school: e.target.value,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: this.state.education.degreeType,
                gpa: this.state.education.gpa,
                graduate: this.state.education.graduate,
                datesAttended: {
                    start: this.state.education.datesAttended.start,
                    end: this.state.education.datesAttended.end,
                }
            }
        })
    }
    addMajor = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                areaOfStudy: e.target.value,
                degreeType: this.state.education.degreeType,
                gpa: this.state.education.gpa,
                graduate: this.state.education.graduate,
                datesAttended: {
                    start: this.state.education.datesAttended.start,
                    end: this.state.education.datesAttended.end,
                }
            }
        })
    }
    chooseDegree = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: e.target.value,
                gpa: this.state.education.gpa,
                graduate: this.state.education.graduate,
                datesAttended: {
                    start: this.state.education.datesAttended.start,
                    end: this.state.education.datesAttended.end,
                }
            }
        })
    }
    addGPA = (e) => {
       this.setState({
           education: {
                school: this.state.education.school,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: this.state.education.degreeType,
                gpa: e.target.value,
                graduate: this.state.education.graduate,
                datesAttended: {
                    start: this.state.education.datesAttended.start,
                    end: this.state.education.datesAttended.end,
                }
           }
       })
    }
    toggleGraduation = () => {
        this.setState(this.state.degrees.map((item) => {
            if (item.graduate === false) {
                item.graduate = true
            } else if (item.graduate === true) {
                item.graduate = false
            }
            return item
        }))
    }
    addStartDate = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: this.state.education.degreeType,
                gpa: this.state.education.gpa,
                graduate: this.state.education.graduate,
                datesAttended: {
                    start: e.target.value,
                    end: this.state.education.datesAttended.end,
                }
            }
        })
    }
    addGradDate = (e) => {
        this.setState({
            education: {
                school: this.state.education.school,
                areaOfStudy: this.state.education.areaOfStudy,
                degreeType: this.state.education.degreeType,
                gpa: this.state.education.gpa,
                graduate: this.state.education.graduate,
                datesAttended: {
                    start: this.state.education.datesAttended.start,
                    end: e.target.value,
                }
            }
        })
    }
    render() {
        const { school, areaOfStudy, degree, degreeType, gpa, graduate, datesAttended } = this.state.education;
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
                    {/* Fix graduation checkbox so it changes when you click before submitting the form. Also add styling */}
                    <Graduate 
                        graduate={graduate} 
                        toggleGraduation={this.toggleGraduation}
                    />
                    <DatesAttended 
                        datesAttended={datesAttended} 
                        addStartDate={this.addStartDate} 
                        addGradDate={this.addGradDate}
                    />
                    <button className='education-btns' type='submit'>Add</button>
                    <button className='education-btns'>Edit School</button>
                    <button className='education-btns'>Delete School</button>
                </form>
            </div>
        )
    }
}
