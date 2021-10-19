import React from "react";

import { Switch, Route } from "react-router";

import "./App.css";

import HomePage from "./pages/homepages/hompage.component.jsx";
const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
