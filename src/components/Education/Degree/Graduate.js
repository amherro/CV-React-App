import React, { Component } from 'react'

export default class Graduate extends Component {
    render() {
        return (
            <div>
                <label>Did you graduate from this institution?</label>
                <input type='radio' name='Yes'></input>Yes
                <input type='radio' name='No'></input>No
            </div>
        )
    }
}
