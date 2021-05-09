import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./components/Home";
import HotOsint from "./components/HotOsint";
import Search from "./components/Search";

import store from "./store";
import OsintDetail from "./components/OsintDetail";


const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path="/" component={Home}></Route>
        <Route path="/hot_osint" component={HotOsint}></Route>
        <Route path="/osint_detail" component={OsintDetail}></Route>
        <Route path="/search" component={Search}></Route>
      </Layout>
    </Router>
  </Provider>, app);

