import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true
    };
  }
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const osintdataClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/Search/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const hotosintClass = location.pathname.match(/^\/hot_osint/) ? "active" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)}>
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse"} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <a class="navbar-brand" href="/">Osiete OSINT</a>
              <li class={osintdataClass}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}>OSINT DATA</Link>
              </li>
              <li class={archivesClass}>
                <Link to="search" onClick={this.toggleCollapse.bind(this)}>OSINT SEARCH</Link>
              </li>
              <li class={hotosintClass}>
                <Link to="hot_osint#ipaddress" onClick={this.toggleCollapse.bind(this)}>HOT OSINT</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
              </li>
              <li class={settingsClass}>
                <Link to="services" onClick={this.toggleCollapse.bind(this)}>Services</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
  };
}

