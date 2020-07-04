import React, { Component } from 'react';

var user = "chinyasuhail"

export default class App extends Component {

  dataURL = ('https://calendly.com/'+ user + window.location.pathname);
    render() {

      return (
      <div className="App">
        <h1>{process.env.MyUser} wtf</h1>
   
      </div>
    );
  }
}