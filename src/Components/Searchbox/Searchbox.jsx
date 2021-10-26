import React, { Component } from 'react'

export default class Searchbox extends Component {
    render() {
        return (
            <div className='bg-danger w-100 top-50'>
                <input type="text" className="form-control inputField fs-2 text-white" placeholder='Search Teachers'></input> 
           
            </div>
        )
    }
}
