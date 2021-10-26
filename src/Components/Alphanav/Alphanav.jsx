import React, { Component } from 'react'

export default class Alphanav extends Component {

 
    constructor(props) {
        super(props);

        this.state = {
            stringArrUnmodified:[]
 
        }

        
       
    }

    componentDidMount()
    {
        // this.stringSpace(this.props.namesAlphabet);
        this.setState({stringArrUnmodified: this.props.namesAlphabet})
           

    }

    
    
    render() {
            let alphabetArray  = this.state.stringArrUnmodified;
      
        return (
            <div className="text-white">

      

              

               <p> {alphabetArray.map((letter)=> (<span className = "alphanavText fs-1">{letter}</span> ))}</p>

            </div>
        )
    }
}
