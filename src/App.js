import React, { Component } from 'react';

var user = "chinyasuhail"

export default class App extends Component {

  dataURL = ('https://calendly.com/'+ user + window.location.pathname);
    render() {

      return (
      <div className="App">
        <h1>{process.env.REACT_APP_user} wtf</h1>
   
      </div>
    );
  }
}