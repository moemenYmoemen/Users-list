import React, { Component } from 'react'

export default class Alphanav extends Component {

 
    constructor(props) {
        super(props);

 
       
    }


    
    
    render() {
            let alphabetArray  = this.props.namesAlphabet;
            let parentCallback = this.props.parentCallback;
            
      
        return (
            <div className="text-white w-100">

                <div className="d-flex justify-content-evenly flex-wrap">

                {alphabetArray.map((letter)=> (<div id = "alphaletter" className = "alphanavText px-1 fs-1" onClick={()=>parentCallback(letter)} >{letter}</div> ))}

                </div>
              

            </div>
        )
    }
}
