import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './config/routes'

class App extends Component {
  render() {
    return (
      <div className="">
        <Routes />
      </div>
    );
  }
}

export default App;
