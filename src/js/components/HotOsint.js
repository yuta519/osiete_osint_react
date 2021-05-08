import axios from "axios";
import React from "react";
import { connect } from "react-redux";

import { fetchUser } from "../actions/userActions";


@connect((store) => {
  return {
    user: store.userReducer.user,
    userFetched: store.userReducer.fetched,
    osintss: store.osintsReducer.osints
  };
})
export default class HotOsint extends React.Component {
  
  constructor(props) {
    super();
    this.state = {
      osints: []
    };
  }
  
  componentDidMount() {
    this.props.dispatch(fetchUser());
    axios.get('http://localhost:8000/api/data')
      .then(res => { 
        const osint = res.data;
        this.setState({
          osints: [...osint]
        });
      });
  }
  

  render() {
    console.log(this.props.user);
    const { osints } = this.state;
    const osintsComponet = osints.map((osint) => {
      // const icon = complete ? "\u2714" : "\u2716";
      const path = 'detail/' + osint.data_id;
      let risk = '';  
      if (osint.malicious_level == 1) {
        risk = 'Dangerous';
      } else {
        risk = 'Safe';
      }  
      return (
      <tr key={osint.data_id} href={osint.data_id} {...osint}>
        <td><a href={path}>{osint.data_id}</a></td>
        <td><span><a href={osint.gui_url}>{osint.gui_url}</a></span></td>
        <td><span>{osint.last_analyzed}</span></td>
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
              <th>IP Address</th> 
              <th>VT GUI</th>
              <th>Last Time</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {osintsComponet}
          </tbody>
        </table>
        {/* <button onClick={this.reloadTodos.bind(this)}>Reload!</button> */}
      </div>
    );
  }

}

