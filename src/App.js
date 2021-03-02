import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import ContactForm from "./components/contact/contact";
import BackpackingBuddies from "./pages/BackpackingBuddies";
import UltimatePlanner from "./pages/UltimatePlanner";
import CovidVaccine from "./pages/CovidVaccine";
import OnlineTraining from "./pages/OnlineTraining";
import PersonalBlog from "./pages/PersonalBlog";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/backpacking-buddies"
          component={BackpackingBuddies}
        />
        <Route
          exact
          path="/ultimate-planner"
          component={UltimatePlanner}
        />
        <Route
        exact
        path="/vaccine-toolkit"
        component={CovidVaccine}
      />
      <Route
      exact
      path="/online-training"
      component={OnlineTraining}
    />
    <Route
    exact
    path="/personal-blog"
    component={PersonalBlog}
  />
      </Switch>
      <ContactForm />
    </Fragment>
  );
}

export default App;
