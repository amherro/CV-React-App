import React, { Component } from 'react'
import './styles/Main/App.css'
import Header from './components/Header'
import Demographics from './components/Demographics/Demographics'
import Education from './components/Education/Education'
import Employment from './components/Employment/Employment'
import Demo from './components/Demo/Demo'
import Footer from './Footer'


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      demographics: [],
      schools: [],
      employers: [],
    }
    this.addPersonalInfo = this.addPersonalInfo.bind(this);
    this.addNewEducation = this.addNewEducation.bind(this);
    this.addNewEmployer = this.addNewEmployer.bind(this)
  }
  addPersonalInfo = (info) => {
    this.setState({
      demographics: this.state.demographics.concat(info)
    })
  }
  addNewEducation = (school) => {
    this.setState({
      schools: this.state.schools.concat(school)
    })
  }
  addNewEmployer = (employer) => {
    this.setState({
      employers: this.state.employers.concat(employer)
    })
  }
  render() {
    const { demographics, schools, employers } = this.state;
    return (
      <div>
        <Header />
        <main className='main-display'>
          <div className='form-style'>
            <Demographics 
              className='demographics-style'
              demographics={demographics} 
              addPersonalInfo={this.addPersonalInfo}
            />
            <Education 
              schools={schools} 
              addNewEducation={this.addNewEducation}
            />
            <Employment 
              employers={employers} 
              addNewEmployer={this.addNewEmployer}
            />
          </div>
          <div className='demo-style'>
            <Demo 
              demographics={demographics} 
              schools={schools} 
              employers={employers}
            />
          </div>
        </main>
        <Footer />
      </div>
    )
  }
}
