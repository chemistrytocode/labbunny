import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar/navbar'
import Requisition from './components/Form/requisition'
import Feedback from './components/Feedback/feedback'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <div>
            <Route exact path="/" component={Requisition} />
            <Route path="/order" component={Requisition} />
            <Route path="/upcoming" component={Requisition} />
            <Route path="/feedback" component={Feedback} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
