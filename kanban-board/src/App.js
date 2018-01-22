import React, { Component } from 'react';
import KanbanBoard from './KanbanBoard';
import logo from './logo.svg';
import './App.css';

let cardList = [
  {
    id : 1,
    title : "Read the Book",
    description : "I Should Read the Whole Book",
    status : "in-progress",
    task :[]
  },
  {
    id : 2,
    title : "Write Some Code",
    description : "Code Along with the Samples in the Book",
    status : "todo",
    task : [
      {
        id : 1,
        name : "ContactList Example",
        done : true
      },
      {
        id : 2,
        name : "Kanban Example",
        done : false,        
      },
      {
        id : 3,
        name : "My Own Experiments",
        done : false,
      }
    ]
  },
  {
    id : 3,
    title : "Create Great App",
    description : "Create Usefull Application for Users",
    status : "done",
    task :[
      {
        id : 1,
        name : 'Expense Manager App',
        done : true
      }
    ]
  }
]

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
        <KanbanBoard cards={cardList}></KanbanBoard>
      </div>      
    );
  }
}

export default App;
