import React, { Component } from 'react';

const user = process.env.REACT_APP_USER;
const name = process.env.REACT_APP_NAME;

export default class App extends Component {

  dataURL = ('https://calendly.com/'+ user + window.location.pathname);
    render() {
      document.title = 'Find A Time With '+ name+' | '+ name+'s Calendar Scheduling'
      return (
     <div className="App">
      <div className="calendly-inline-widget col-12" data-url={this.dataURL} style={{ position:"absolute", top:0, height:"100%", width:"100%" }}></div>
      </div>
   
    );
  }
}