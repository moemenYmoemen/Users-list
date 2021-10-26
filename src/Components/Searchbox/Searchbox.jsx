import React, { Component } from 'react'

export default class Searchbox extends Component {

    
    handleKeyPress= (event)=> {
        if(event.charCode==13){
            this.props.parentCallback(event.target.value)
        
        } 
      }

      
    render() {
        
        return (
            <div className='bg-danger w-100 top-50'>
                <input 
                type="text" 
                className="form-control inputField fs-2 text-white" 
                placeholder='Search Teachers'
                onKeyPress={this.handleKeyPress}
                ></input> 
           
            </div>
        )
    }
}
