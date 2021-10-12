import React, { Component } from 'react'

export default class Phone extends Component {
    render() {
        const { phone, addPhone } = this.props;
        return (
            <div>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='(xxx) xxx-xxxx' value={phone} onChange={addPhone}></input>
            </div>
        )
    }
}
