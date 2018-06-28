import React, { Component } from 'react';
import { Button } from './app/Button/Button';
import { Result } from './app/Result/Result';
import { Github } from './app/Github/Github';
import logo from './logo.svg';
import './App.css';



class App extends Component {
    state = {
        counter: 0
    }

    incrementCounter = (incrementValue) => {
        const nextState = this.state;
        nextState.counter = this.state.counter + incrementValue;

        this.setState(prevState => nextState);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Button incrementValue={1} clickCallback={this.incrementCounter} />
          <Button incrementValue={2} clickCallback={this.incrementCounter} />
          <Button incrementValue={5} clickCallback={this.incrementCounter} />
          <Button incrementValue={10} clickCallback={this.incrementCounter} />

          <Result message={'Counter: ' + this.state.counter}/>
        </header>
        <Github />
      </div>
    );
  }
}

export default App;
