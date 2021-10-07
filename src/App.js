import React, { Component } from 'react'
import Header from './components/Header'
import Demographics from './components/Demographics/Demographics'
import Education from './components/Education/Education'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Demographics />
        <Education />
      </div>
    )
  }
}

