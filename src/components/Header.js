import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header style={headerStyle}>
                <h1>Resume Creator</h1>
            </header>
        )
    }
}

const headerStyle = {
    textAlign: 'center',
    padding: '50px 0px 30px 0px',
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(0, 117, 226)',
}