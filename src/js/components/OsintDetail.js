import axios from "axios";
import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap"
import { Chart } from "react-google-charts";
import { connect } from "react-redux";

import { fetchOsints } from "../actions/osintActions";
import { fetchUser } from "../actions/userActions";


@connect((store) => {
  return {
    user: store.userReducer.user,
    userFetched: store.userReducer.fetched,
    osints: store.osintsReducer.osints,
    fetching: store.osintsReducer.fetching};
})
export default class OsintDetail extends React.Component {
  render() {
    const pattern = /^\?ip=(.*)/;
    const osint_id = location.search.match(pattern);
    return (
      <>
      <h1>About <b>{ osint_id[1] }</b></h1>
      <Row>
        <Col xs={3}><Chart width={400} height={120} chartType="Gauge" 
          loader={<div>Loading Chart</div>}
          data={[ ['Label', 'Value'], ['Risk', 20], ]}
          options={{ redFrom: 90, redTo: 100, yellowFrom: 30, yellowTo: 90, 
            minorTicks: 5 }}
          rootProps={{ 'data-testid': '1' }}/></Col>
        <Col xs={9}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>owner</td>
                <td>null</td>
              </tr>
              <tr>
                <td>gui</td>
                <td>null</td>
              </tr>
              <tr>
                <td>Malicious Level</td>
                <td>null</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      </>
    );
  }

}
