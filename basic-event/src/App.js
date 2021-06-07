import React from "react";
import appCss from "./styles/app.css"

class App extends React.Component{

  state = {
    message: "Hello World"
  };

  printHelloWorld = () => {
    console.log("Hello World")
  };

  updateState = () => {
    this.setState({
      message : "Hello World Updated"
    });
  };

  updateStateByInput = e => {
    this.setState({
      message: e.target.value
    })
  };

  myStyle = {
    color: "blue",
    fontSize: 100
  };

  render() {
    return (
        <div>
          <button onClick={this.printHelloWorld}>Print Hello World</button>
          <br/>
          <br/>
          <button onClick={this.updateState}>Update State</button>
          <h1 style={{ width: "20%", backgroundColor: "red" }}>{this.state.message}</h1>
          <br/>
          <h1 style={this.myStyle}>{this.state.message}</h1>
          <br/>
          <h1 className="box">{this.state.message}</h1>
          <br/>
          <input type="text" value={this.state.message} onChange={this.updateStateByInput}/>
        </div>
    );
  }
}

export default App;
