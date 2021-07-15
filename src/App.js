import React, { Fragment, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header";

import "./App.css";
import Home from "./pages/Home";

import ContactForm from "./components/contact/contact";

const UltimatePlanner = React.lazy(() => import("./pages/UltimatePlanner"));
const CovidVaccine = React.lazy(() => import("./pages/CovidVaccine"));
const OnlineTraining = React.lazy(() => import("./pages/OnlineTraining"));
const PersonalBlog = React.lazy(() => import("./pages/PersonalBlog"));
const BackpackingBuddies = React.lazy(() =>
  import("./pages/BackpackingBuddies")
);
const WeatherTracking = React.lazy(() => import("./pages/Weather"));
const PrimePlanner = React.lazy(() => import("./pages/PrimePlanner"));

function App() {
  return (
    <div className="main">
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
            <Route exact path="/prime-planner" component={PrimePlanner} />
            <Route exact path="/weather" component={WeatherTracking} />
          </Suspense>
        </Switch>
        <ContactForm />
    </div>
  );
}

export default App;
