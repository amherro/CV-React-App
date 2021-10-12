import React, { Component } from 'react'
import '../../styles/Demographics/Phone.css'

export default class Phone extends Component {
    render() {
        const { phone, addPhone } = this.props;
        return (
            <div className='phone-input-section'>
                <label className='phone-label'>Phone Number</label>
                <input className='phone-input' type='tel' name='phone' placeholder='(xxx) xxx-xxxx' value={phone} onChange={addPhone}></input>
            </div>
        )
    }
}
