import React, { Component } from 'react';

var user = "chinyasuhail"

const lol = process.env.REACT_APP_USER;

export default class App extends Component {

  dataURL = ('https://calendly.com/'+ user + window.location.pathname);
    render() {

      return (
      <div className="App">
        <h1>{lol} hi</h1>
   
      </div>
    );
  }
}