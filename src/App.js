import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route to="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
