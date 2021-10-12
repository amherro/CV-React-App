import React, { Component } from 'react'
import Name from './Name'
import Email from './Email'
import Address from './Address'
import Phone from './Phone'
import '../../styles/Demographics/Demographics.css'

export default class Demographics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {
                name: '',
                email: '',
                address: '',
                phone: '',
            },
            people: [],
        }
    }
    addDemographics = (e) => {
        e.preventDefault();
        this.props.addPersonalInfo([this.state.info.name, this.state.info.email, this.state.info.address, this.state.info.phone])
        this.setState({
            people: this.state.people.concat(this.state.info),
            info: {
                name: '',
                email: '',
                address: '',
                phone: '',
            }
        })
        this.props.demographics.concat(this.state.people)
    }
    addName = (e) => {
        this.setState({
            info: {
                name: e.target.value,
                email: this.state.info.email,
                address: this.state.info.address,
                phone: this.state.info.phone,
            }
        })
    }
    addEmail = (e) => {
        this.setState({
            info: {
                name: this.state.info.name,
                email: e.target.value,
                address: this.state.info.address,
                phone: this.state.info.phone,
            }
        })
    }
    addAddress = (e) => {
        this.setState({
            info: {
                name: this.state.info.name,
                email: this.state.info.email,
                address: e.target.value,
                phone: this.state.info.phone,
            }
        })
    }
    addPhone = (e) => {
        this.setState({
            info: {
                name: this.state.info.name,
                email: this.state.info.email,
                address: this.state.info.address,
                phone: e.target.value,
            }
        })
    }
    render() {
        const { people } = this.state;
        const { name, email, address, phone } = this.state.info;
        return (
            <div>
                <h2 className='heading'>Demographics</h2>
                <form people={people} onSubmit={this.addDemographics} className='demographics-style'>
                    <Name
                        name={name} 
                        addName={this.addName}
                    />
                    <Email 
                        email={email} 
                        addEmail={this.addEmail}
                    />
                    <Address 
                        address={address} 
                        addAddress={this.addAddress}
                    />
                    <Phone 
                        phone={phone} 
                        addPhone={this.addPhone}
                    />
                    <button className='demographics-btn' type='submit'>Save</button>
                </form>
            </div>
            
            
        )
    }
}

