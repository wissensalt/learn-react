import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './base/Button';
import Header from './base/Header';
import Content from './base/Content';
import Footer from './base/Footer';
import BasicComponent from './base/BasicComponent.js';
import {DoubleButton} from './base/Coba';
import {connect} from 'react-redux';
import {changeText} from './Action';
//import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    var a =1;
    var textStyle = {
      fontSize: 100,
      color: '#FF0000',      
    }
    var textStyle2 = {
      fontStyle: 'italic',
      fontSize: 100,
      color: "#FF0011"
    }
    const {Hello} = this.props.Hello;
    console.log(Hello);
    console.log('Yes');
    return (      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Validate variable a {a===1 ? 'True' : 'False'}</div>
        <div>1 + 5 equals to {1+5}</div>
        <Button label="Submit"/>
        <div style={textStyle}>Example with Style</div>
        <div style={textStyle2}>Example with Style 2</div>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>

        <BasicComponent />
        <DoubleButton primary="btn btn-danger" primary2="btn btn-primary" name1="button 1" name2="button 2" />
        <h1>{Hello}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Hello: state.Hello
  };
}

export default connect(mapStateToProps, {changeText})(App);