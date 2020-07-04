import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favicon from 'react-favicon';

const fav = process.env.REACT_APP_FAV;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  <Favicon url= {fav} />
 , document.getElementById('root')
);


