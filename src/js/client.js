import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./components/Home";
import HotOsint from "./components/HotOsint";
import Search from "./components/Search";

import store from "./store";


const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={Home}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/hot_osint" component={HotOsint}></Route>
      </Layout>
    </Router>
  </Provider>, app);

