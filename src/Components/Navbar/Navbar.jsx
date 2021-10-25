import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (

            <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark headerPanel position-relative ">
                    
                   <div className="container  d-flex justify-content-start  align-items-center position-absolute headerElements">

                       <img src="./images/logo.png" alt="" className="headerLogo align-self-end" />
                        <h1 class = "text-white fs-3 headerFont ps-2 py-2 align-self-end">Teacher Index</h1>
       

                    
                   </div>
                   </nav>
                
            </div>

            </React.Fragment>
        )
    }
}
