import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App-header">
            <h2>Welcome to React</h2>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
