import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter} from 'react-router-dom'
import Home from './Components/Home/Home';
import { Route, Redirect, Switch } from 'react-router';
import $ from 'jquery';
import SortedSet from 'js-sorted-set'



export default class App extends Component {

  state = {
    namesAlphabet:[]
  }

   getData()
  {
    $.getJSON('https://cdn.chalk.com/misc/sample_teachers.json', data=> {

      const set = new SortedSet({ comparator: function(a, b) { return b - a }});

      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

      for(let i =0; i<data.length;i++)
      {
        let newLetter = data[i].first_name[0].toUpperCase();
        //console.log(newLetter);
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
      this.setState({namesAlphabet:alphabet});
      

  });
 
}


  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    console.log('calledFirst')
    this.getData();
  }
  
  render() {

    return (
      <React.Fragment>
      <Navbar namesAlphabet = {this.state.namesAlphabet}/>
     
      <Switch>
            <Route path='/home'> <Home/> </Route>
            <Redirect from="/" to="/home" />
        <Redirect from="/" to="/home" />
      </Switch>
      
      <Footer/> 
      </React.Fragment>
    )
  }
}
