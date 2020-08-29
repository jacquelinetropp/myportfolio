import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import ContactForm from "./components/contact/contact";
import BackpackingBuddies from "./pages/BackpackingBuddies";

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
      </Switch>
      <ContactForm />
    </Fragment>
  );
}

export default App;
