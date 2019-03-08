import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Switch, Router, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import Login from "./components/Account/login";
import Requisition from "./components/Form/requisition";
import UpcomingWeek from "./components/Upcoming/upcomingWeek";
import UpcomingDay from "./components/Upcoming/upcomingDay";
import Feedback from "./components/Feedback/feedback";


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <div>
            <NavBar />
            <Route exact path="/" component={Login} />
            <Route path="/order" component={Requisition} />
            <Route exact path="/upcoming" component={UpcomingWeek} />
            <Route path="/upcoming/:id" component={UpcomingDay} />
            <Route path="/feedback" component={Feedback} />
            <Route path="/day" component={UpcomingDay} />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
