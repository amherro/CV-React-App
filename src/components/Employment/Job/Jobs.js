import React, { Component } from 'react'
import Company from './Company'
import Duties from './Duties'
import EmploymentLength from './EmploymentLength'
import Position from './Position'

export default class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {
                company: '',
                position: '',
                duties: '',
                length: {
                    started: '',
                    ended: '',
                },
            },
            jobs: [],
        }
    }
    addEmployment = (e) => {
        e.preventDefault();
        this.props.addNewEmployer([this.state.job.company, this.state.job.position, this.state.job.duties, this.state.job.length.started, this.state.job.length.ended])
        this.setState({
           jobs: this.state.jobs.concat(this.state.job),
           job: {
               company: '',
               position: '',
               duties: '',
               length: {
                   started: '', 
                   ended: '',
               }
           }
        })
    }
    addCompanyName = (e) => {
        this.setState({
            job: {
                company: e.target.value,
                position: this.state.job.position,
                duties: this.state.job.duties,
                length: {
                    started: this.state.job.length.started,
                    ended: this.state.job.length.ended,
                },
            }
        })
    }
    addTitle = (e) => {
        this.setState({
            job: {
                company: this.state.job.company,
                position: e.target.value,
                duties: this.state.job.duties,
                length: {
                    started: this.state.job.length.started,
                    ended: this.state.job.length.ended,
                },
            }
        })
    }
    addJobDuties = (e) => {
        this.setState({
            job: {
                company: this.state.job.company,
                position: this.state.job.position,
                duties: e.target.value,
                length: {
                    started: this.state.job.length.started,
                    ended: this.state.job.length.ended,
                },
            }
        })
    }
    startJobDate = (e) => {
        this.setState({
            job: {
                company: this.state.job.company,
                position: this.state.job.position,
                duties: this.state.job.duties,
                length: {
                    started: e.target.value,
                    ended: this.state.job.length.ended,
                },
            }
        })
    }
    endJobDate = (e) => {
        this.setState({
            job: {
                company: this.state.job.company,
                position: this.state.job.position,
                duties: this.state.job.duties,
                length: {
                    started: this.state.job.length.started,
                    ended: e.target.value,
                },
            }
        })
    }
    render() {
        const { jobs, company, position, duties, length } = this.state.job;
        return (
            <div>
                <form jobs={jobs} onSubmit={this.addEmployment}>
                    <Company company={company} addCompanyName={this.addCompanyName}/>
                    <Position position={position} addTitle={this.addTitle}/>
                    <Duties duties={duties} addJobDuties={this.addJobDuties}/>
                    <EmploymentLength length={length} startJobDate={this.startJobDate} endJobDate={this.endJobDate}/>
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}