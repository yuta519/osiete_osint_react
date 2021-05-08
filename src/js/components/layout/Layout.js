import React from "react";
import { Container, Col, Row } from "react-bootstrap"
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import Footer from "./Footer";
import Nav from "./Nav";

@connect((store) => {
    return {
      user: store.userReducer.user,
      userFetched: store.userReducer.fetched,
      tweets: store.tweetsReducer.tweets,
      tweetsFetching: store.tweetsReducer.fetching
    };
  })  
class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Nav location={location} />
        <Container>
          <Row>
            <div class="col-lg-12">
              {this.props.children}
            </div>
          </Row>

          
      {/* <Row>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
        <Col>.col</Col>
      </Row>
      <Row>
        <Col xs="3">.col-3</Col>
        <Col xs="auto">.col-auto - variable width content</Col>
        <Col xs="3">.col-3</Col>
      </Row>
      <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">.col-6</Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
        <Col sm="4">.col-sm-4</Col>
      </Row>
      <Row>
        <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
      </Row>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
      </Row>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
      </Row> */}
          <Footer />
        {/* </div> */}
        </Container>
      </div>
    );
  }
}
export default withRouter(Layout);
