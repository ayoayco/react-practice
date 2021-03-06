import React, { Component } from 'react';
import { Github } from './app/Github/Github';
import { Calc } from './app/Calc/Calc';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ayos React Apps</h1>
          <p>apps created by Ayo for learning React.js concepts</p>
        </header>
        <Calc />
        <Github />
      </div>
    );
  }
}

export default App;
