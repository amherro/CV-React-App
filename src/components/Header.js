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
    margin: '10px 0px'
}