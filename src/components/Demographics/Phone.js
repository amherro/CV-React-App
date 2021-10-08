import React, { Component } from 'react'

export default class Phone extends Component {
    render() {
        const { phone } = this.props;
        return (
            <div>
                <label>Phone Number</label>
                <input type='tel' placeholder='(xxx) xxx-xxxx' value={phone}></input>
            </div>
        )
    }
}
