import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import Requisition from './components/Form/requisition'
import NavBar from './components/NavBar/navbar'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <div>
            <Route exact path="/" component={Requisition} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
