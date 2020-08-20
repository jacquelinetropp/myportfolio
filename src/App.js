import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import ContactForm from "./components/contact/contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
      <ContactForm />
    </Fragment>
  );
}

export default App;
