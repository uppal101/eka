import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/Home/landingPage';
import { SignupPage1, SignupPage2, SignupPage3 } from './components/Forms/form-container';
//import Form2 from './components/Forms/form2';
//import Form3 from './components/Forms/form3';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route path="/signup" component={SignupPage1} />
            <Route path="/signup2" component={SignupPage2} />
            <Route path="/signup3" component={SignupPage3} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
