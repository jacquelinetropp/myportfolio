import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./components/contact/contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
   
    </Fragment>
  );
}

export default App;
