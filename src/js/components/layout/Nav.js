import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class Navi extends React.Component {
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
    // const { location } = this.props;
    // const { collapsed } = this.state;
    // const homeClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/search/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    // const hotosintClass = location.pathname.match(/^\/hot_osint/) ? "active" : "";

    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">OSIETE OSINT</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="search">Search OSINT</Nav.Link>
            <Nav.Link href="hot_osint">Hot OSINT</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="setting">Setting</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
      {/* <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
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
              <li class={homeClass}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}>Home</Link>
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
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            </ul>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <Button variant="success" type="submit" size="sm">Success</Button>{' '}
                
            </form>
          </div>
        </div>
      </nav> */}
      </>

    );
  };
}

