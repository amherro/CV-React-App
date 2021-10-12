import React, { Component } from 'react'



export default class Demo extends Component {
    render() {
        const { demographics, schools, employers } = this.props;
        return (
            <div style={demoStyle}>
                <h2>Preview</h2>
                <div className='demographics' style={{border: '2px black solid', marginRight: '200px'}} >
                    <h1>{demographics[0]}</h1>
                    <h1>{demographics[1]}</h1>
                    <h1>{demographics[2]}</h1>
                    <h1>{demographics[3]}</h1>
                </div>
                <div className='education' style={{border: '2px red solid', marginRight: '200px'}} >
                    <h1>{schools[0]}</h1>
                    <h1>{schools[1]}</h1>
                    <h1>{schools[2]}</h1>
                    <h1>{schools[3]}</h1>
                    <h1>{schools[4]}</h1>
                    <h1>{schools[5]}</h1>
                    <h1>{schools[6]}</h1>
                </div>
                <div className='work_history' style={{border: '2px blue solid', marginRight: '200px'}}>
                    <h1>{employers[0]}</h1>
                    <h1>{employers[1]}</h1>
                    <h1>{employers[2]}</h1>
                    <h1>{employers[3]}</h1>
                    <h1>{employers[4]}</h1>
                </div>
            </div>
        )
    }
}
const demoStyle = {
    marginRight: '75px',
    paddingLeft: '20px',
    border: '2px solid #000',
    minHeight: '500px',
}