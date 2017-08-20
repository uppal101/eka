import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/Home/landingPage';
import Form1 from './components/Forms/form1';
import Form2 from './components/Forms/form2';
import Form3 from './components/Forms/form3';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={Form1} />
            <Route path="/signup2" component={Form2} />
            <Route path="/signup3" component={Form3} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
