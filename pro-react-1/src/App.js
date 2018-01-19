import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import HelloDynamic from "./HelloDynamic";
import GroceryList from "./GroceryList";
import Parent from "./Parent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Static Value : <Hello></Hello>          
        </p>
        <p>
          Dynamic Value : <HelloDynamic></HelloDynamic>
        </p>
        <p>
          Props Value : <GroceryList></GroceryList>
        </p>
        <p>
          Parent Child Value : <Parent></Parent>
        </p>
      </div>
    );
  }
}

export default App;
