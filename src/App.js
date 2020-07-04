import React, { Component } from 'react';
import './App.css';

var user = "chinyasuhail"





export default class App extends Component {


  dataURL = ('https://calendly.com/'+ user + window.location.pathname);
  render() {
    return (
      <div className="App">
         <small>You are running this application in <b>{process.env.user}</b></small>
      <div className="calendly-inline-widget col-12" data-url={this.dataURL} style={{ position:"absolute", top:0, height:"100%", width:"100%" }}></div>
      </div>
    );
  }
}