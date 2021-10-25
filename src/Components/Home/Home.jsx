import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="w-100 mainPanel text-center mx-auto position-relative">
                <div className = "position-absolute top-50 start-50 translate-middle">
                    <img src="images/moemen.png"/>
                    
                      <h2 className="text-white fs-1 fw-light">Development Portfolio</h2>
                      <h3 className="text-white fs-5 fw-light" > Software Developer (Front-end)</h3>
                </div>
           
            </div>
        )
    }
}
