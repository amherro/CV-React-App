import React, { Component } from 'react'

export default class Graduate extends Component {
    render() {
        const { toggleGraduation } = this.props
        return (
            <div>
                <label>Did you graduate from this institution?</label>
                <input type='checkbox' name='Yes' onClick={toggleGraduation}></input>
                
            </div>
        )
    }
}
