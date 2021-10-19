import React from "react";

import { Switch, Route } from "react-router";

import "./App.css";

import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component.jsx";
import HomePage from "./pages/homepages/hompage.component.jsx";

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route  path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
