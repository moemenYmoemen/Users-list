import React, { Component } from 'react'
import Teacherlist from '../../Teacherlist/Teacherlist'
import { Route, Redirect, Switch } from 'react-router-dom';
import Latestteacherslist from '../Latestteacherslist/Latestteacherslist';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default class Mainpanel extends Component {


    state = {
                redirect:'',
        
    }

    



    assesTeacherlist()
    {
        let teachers_list = this.props.filtered_teachers;
        
       
        if(teachers_list.length===0)
        {  
            this.state.redirect='home';
            
            
        }
        else
        {
            this.state.redirect='teachers';
            
        }
    }


    renderRedirect = () => {
        
        this.assesTeacherlist();

        if (this.state.redirect==='home') {
          return <Latestteacherslist/> 
        }
        else if  (this.state.redirect==='teachers') {
            
            return <Teacherlist teachers_list={this.props.filtered_teachers}/> 
          }
      }

    render() {
       
        console.log("here first");
        
        return (
            <div>
               {this.renderRedirect()} 

            </div>
                   

        )
    }
}
