import React from "react";

import { Switch, Route } from "react-router";

import "./App.css";
import ShopPage from "./pages/shop/shop.component.jsx";
import HomePage from "./pages/homepages/hompage.component.jsx";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
