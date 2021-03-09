import React, { Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";

import ContactForm from "./components/contact/contact";


const UltimatePlanner = React.lazy(() =>  import("./pages/UltimatePlanner"));
const CovidVaccine = React.lazy(() =>  import("./pages/CovidVaccine"));
const OnlineTraining = React.lazy(() =>  import("./pages/OnlineTraining"));
const PersonalBlog = React.lazy(() =>  import("./pages/PersonalBlog"));
const BackpackingBuddies = React.lazy(() => import("./pages/BackpackingBuddies"));

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Suspense fallback={<div>Loading</div>}>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/backpacking-buddies"
            component={BackpackingBuddies}
          />
          <Route exact path="/ultimate-planner" component={UltimatePlanner} />
          <Route exact path="/vaccine-toolkit" component={CovidVaccine} />
          <Route exact path="/online-training" component={OnlineTraining} />
          <Route exact path="/personal-blog" component={PersonalBlog} />
        </Suspense>
        
      </Switch>
      <ContactForm />
    </Fragment>
  );
}

export default App;
