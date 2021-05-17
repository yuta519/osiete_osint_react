import axios from "axios";
import React from "react";
import { Chart, Component } from "react-google-charts";
import { connect } from "react-redux";

import { fetchOsints } from "../actions/osintActions";
import { fetchUser } from "../actions/userActions";


@connect((store) => {
  return {
    user: store.userReducer.user,
    userFetched: store.userReducer.fetched,
    osints: store.osintsReducer.osints,
    fetching: store.osintsReducer.fetching
  };
})
export default class OsintDetail extends React.Component {
  render() {
    console.log(location)
    return (  
      <div>
        <h1>detail{ location.search }</h1>
        <Chart width={400} height={120} chartType="Gauge" loader={<div>Loading Chart</div>}
          data={[
            ['Label', 'Value'],
            ['Risk', 20],
          ]}
          options={{
            redFrom: 90,
            redTo: 100,
            yellowFrom: 30,
            yellowTo: 90,
            minorTicks: 5,
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  }

}
