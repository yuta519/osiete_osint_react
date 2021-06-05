import React from "react";
import { connect } from "react-redux";

import { fetchDangerousOsints } from "../actions/osintActions";


@connect((store) => {
  return {
    osints: store.osintsReducer.osints,
    fetching: store.osintsReducer.fetching
  };
})
export default class HotOsint extends React.Component {
  
  constructor(props) {
    super();
  }
  
  componentDidMount() {
    this.props.dispatch(fetchDangerousOsints());
  }

  render() {
    const { user, osints, fetching } = this.props;
    if (fetching === true) {
      return (<div>fetching...</div>);
    }
    if (!osints.length) {
      console.log(user, osints);
      return <button onClick={fetchDangerousOsints.bind(this)}>Reload OSINTS</button>;
    }
  
    const mappedOsints = osints.map(osint => {
      const path = 'osint_detail?ip=' + osint.data_id;
      let risk = '';
      let type = '';
      if (osint.malicious_level == 1) {
        risk = 'Dangerous';
      } else {
        risk = 'Safe';
      }
      if (osint.analyzing_type == 1) {
        type = 'IP Address';
      } else if (osint.analyzing_type == 2) {
        type = 'Domain';
      } else if (osint.analyzing_type == 3) {
        type = 'Hash';
      }
      return (
        <tr key={osint.data_id} href={osint.data_id} {...osint}>
          <td><a href={path}>{osint.data_id}</a></td>
          <td><span>{osint.last_analyzed}</span></td>
          <td><span>{type}</span></td>
          <td><span>{risk}</span></td>
        </tr>
      );
    });
    
    return (
      <div>
        <h1>Hot OSINT</h1>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>OSINT</th> 
              <th>Last Update Time</th>
              <th>Osint Type</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {mappedOsints}
          </tbody>
        </table>
      </div>
    );
  }

}

