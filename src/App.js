import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import NavBar from './components/NavBar/navbar'
import Requisition from './components/Form/requisition'
import UpcomingWeek from './components/Upcoming/upcomingWeek'
import Feedback from './components/Feedback/feedback'
import UpcomingDay from './components/Upcoming/upcomingDay'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <div>
            <Route exact path="/" component={Requisition} />
            <Route path="/order" component={Requisition} />
            <Route path="/upcoming" component={UpcomingWeek} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/day" component={UpcomingDay} /> // Delete this

          </div>
        </Switch>

      </div>
    );
  }
}

export default App;
