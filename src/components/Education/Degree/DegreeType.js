import React, { Component } from 'react'

export default class DegreeType extends Component {
    render() {
        return (
            <div>
                <label>What type of degree did you receive?</label>
                <select name='degree_types'>
                    <option value=''>---</option>
                    <option value='HS Diploma/GED'>HS Diploma/GED</option>
                    <option value='Bachelor'>Bachelor</option>
                    <option value='Masters'>Masters</option>
                    <option value='Doctorate'>Doctorate</option>
                </select>
            </div>
        )
    }
}
