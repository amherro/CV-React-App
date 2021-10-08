import React, { Component } from 'react'
import Header from './components/Header'
import Demographics from './components/Demographics/Demographics'
import Education from './components/Education/Education'
import Employment from './components/Employment/Employment'
import Demo from './components/Demo/Demo'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Demographics />
        <Education />
        <Employment />
        <Demo />
      </div>
    )
  }
}

