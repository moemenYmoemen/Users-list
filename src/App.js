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
import Profile from './Components/Profile/Profile';




export default class App extends Component {

  state = {
    namesAlphabet:[],
    maintitle:'Viewed Profiles',
    teacherslist_primary:[],
    teacherslist_filtered:[],
    selectedProfile:{},
    profileVisible:false

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

  getProfileId = (id)=>
  {

    let profile =JSON.parse(JSON.stringify(this.getTeachersbyId(id)));
    console.log("Prof" + profile);
    this.setState({selectedProfile:profile},function()
    {
      this.state.selectedProfile={};

    });
  }



  getTeachersbyId=(id)=>
  {
    let teachersList = this.state.teacherslist_primary;

    for(let i =0; i< teachersList.length; i++)
    {
      if(teachersList[i].id===id)
      {
        return teachersList[i];
      }
    }
    return NaN;
  }

  getTeachers=(name)=>
  {

    let teachersList = this.state.teacherslist_primary;
    let filteredlist =[];
    let filteredlist_2ndpriority=[];
    let filteredlist_3rdpriority=[];
    let filteredlist_4thpriority=[];
    let numberofspaces = (name.match(/ /g) || []).length;
    
    
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
    else if(numberofspaces==0)
    {
      
      for(let i =0; i<teachersList.length;i++)
      {
      
        if(teachersList[i].first_name.toUpperCase().startsWith(name.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist.push(newTeacher);
          
        }

        else if(teachersList[i].first_name.toUpperCase().includes(name.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist_2ndpriority.push(newTeacher);
          
        }
        else if(teachersList[i].last_name.toUpperCase().startsWith(name.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist_3rdpriority.push(newTeacher);
        
  
        }
        else if(teachersList[i].last_name.toUpperCase().includes(name.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist_4thpriority.push(newTeacher);
  
        }
        

      }

   
      let concArry = ( (filteredlist.concat(filteredlist_2ndpriority)) .concat(filteredlist_3rdpriority) ).concat(filteredlist_4thpriority)
      this.setState({teacherslist_filtered:concArry});

    }
    // Case 4 : First Name Last Name
    else if(numberofspaces>0)
    {
     
      var fullName = name.split(' '),
      firstName = fullName[0],
      lastName = fullName[fullName.length - 1];

      for(let i =0; i<teachersList.length;i++)
      {
      
        if(teachersList[i].first_name.toUpperCase() == (firstName.toUpperCase()) && teachersList[i].last_name.toUpperCase() == (lastName.toUpperCase()))
        {
          let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
          filteredlist.push(newTeacher);
          break;
        }
        else
        {
           if(teachersList[i].first_name.toUpperCase().startsWith(firstName.toUpperCase()))
          {
            let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
            filteredlist.push(newTeacher);
            
          }
          else if(teachersList[i].first_name.toUpperCase().includes(firstName.toUpperCase()))
          {
            let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
            filteredlist_2ndpriority.push(newTeacher);
          }
          else if(teachersList[i].last_name.toUpperCase().startsWith(lastName.toUpperCase()))
          {
            let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
            filteredlist_3rdpriority.push(newTeacher);
    
          }
          else if(teachersList[i].last_name.toUpperCase().includes(lastName.toUpperCase()))
          {
            let newTeacher =  JSON.parse(JSON.stringify( teachersList[i]));
            filteredlist_4thpriority.push(newTeacher);
    
          }
      }

      }
      
      let concArry = ( (filteredlist.concat(filteredlist_2ndpriority)) .concat(filteredlist_3rdpriority) ).concat(filteredlist_4thpriority)
      this.setState({teacherslist_filtered:concArry});

    }

    // Case 5 : More than 2 names
    else if(numberofspaces>1)
    { 
      console.log('more than 2')

    }
  }

  

  
  render() {
    
    console.log("inside render "+this.state.selectedProfile.first_name);

    return (
      <React.Fragment>
       
     
      

      <Navbar namesAlphabet = {this.state.namesAlphabet} searchTerm = {this.searchTerm}/>
      <Maintitle title = {this.state.maintitle}/>
      <Profile profileData={this.state.selectedProfile}/>
      <Mainpanel filtered_teachers={this.state.teacherslist_filtered} profileId = {this.getProfileId}/>
      <Footer/> 
        

  
      </React.Fragment>
    )
  }
}
