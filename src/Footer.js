import React, { Component } from 'react'
import './styles/Main/Footer.css'
import logo from './images/github-logo.png'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='footer-content'>
                    <a href="https://github.com/amherro"> 
                        <img className='github-logo' src={logo} alt="GitHub Logo and Link"></img>
                    </a>
                    <p className='copyright'>Copyright © 2021 amherro</p>
                </div>
            </footer>
        )
    }
}
