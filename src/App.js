import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import Mainpanel from './Components/Mainpanel/Mainpanel';
import { Route, Redirect, Switch } from 'react-router';
import $ from 'jquery';
import SortedSet from 'js-sorted-set'
import Maintitle from './Components/Maintitle/Maintitle';



export default class App extends Component {

  state = {
    namesAlphabet:[],
    maintitle:'Viewed Profiles',
    teacherslist_primary:[],
    teacherslist_filtered:[]
  }

   getData()
  {
    $.getJSON('https://cdn.chalk.com/misc/sample_teachers.json', data=> {

      
      const set = new SortedSet({ comparator: function(a, b) { return b - a }});

      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

      for(let i =0; i<data.length;i++)
      {
        let newLetter = data[i].first_name[0].toUpperCase();
        set.insert(newLetter);
      }

      for(let i=0; i<alphabet.length;i++)
      {
        if(set.contains(alphabet[i]))
        {
          this.state.alphabet.push(alphabet[i]);
        }
      }

      //console.log(alphabet);
      this.setState({namesAlphabet:alphabet,
                     teacherslist_primary:data});
  
      

  });
 
}


  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    console.log('calledFirst')
    this.getData();
  }

  searchTerm = (term) =>
  {
    this.setState({maintitle:term})
    this.getTeachers(term);
   
  }


  getTeachers=(name)=>
  {

    let teachersList = this.state.teacherslist_primary;
    let filteredlist =[];

    
    // Case 1 : empty input
    if(name.length==0)
    {
     
        this.setState({teacherslist_filtered:[]});
       
    }

    // Case 2 : Single letter
    else if(name.length==1)
    {
  
      for(let i =0; i<teachersList.length;i++)
      {
        
        if(teachersList[i].first_name[0].toUpperCase()  === name.toUpperCase())
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist.push(newTeacher);
          
        }
      }

      this.setState({teacherslist_filtered:filteredlist});
    }

 

    // Case 3 : Single Name

    // Case 4 : First Name Last Name

    // Case 5 : More than 2 names
  }


  
  render() {
    

    return (
      <React.Fragment>
      <Navbar namesAlphabet = {this.state.namesAlphabet} searchTerm = {this.searchTerm}/>
      <Maintitle title = {this.state.maintitle}/>
      <Mainpanel filtered_teachers={this.state.teacherslist_filtered}/>
      <Footer/> 
      </React.Fragment>
    )
  }
}
