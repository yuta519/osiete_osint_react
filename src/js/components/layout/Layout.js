import React from "react";
import { Container, Col, Row } from "react-bootstrap"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";

@connect((store) => {
    return {
      user: store.userReducer.user,
      userFetched: store.userReducer.fetched,
      osints: store.osintsReducer.osints,
      osintsFetching: store.osintsReducer.fetching
    };
  })  
class Layout extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Nav location={location} />
        <Container>
          <Row>
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </Row>
          <Footer />
        </Container>
      </div>
    );
  }
}
export default withRouter(Layout);
