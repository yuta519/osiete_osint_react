import React from "react";

import axios from "axios";
import { Button, Container , Form, Row, Table } from 'react-bootstrap'


export default class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {osint: '', type: '', result: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    if (event.target.name == 'osint') {
      this.setState({ [event.target.name]: event.target.value });
    } else if (event.target.value == 'IP ADDRESS') {
      this.setState({[event.target.name]: 1});
    } else if (event.target.value == 'DOMAIN') {
      this.setState({[event.target.name]: 2});
    } else if (event.target.value == 'FILEHASH') {
      this.setState({[event.target.name]: 3});
    } else {
      this.setState({[event.target.name]: null});
    }
  }

  handleSubmit(event) {
    if (this.state.type == null || this.state.type == '') {
      alert('Please select valid OSINT type.')
    } else {
      event.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:8000/osints/api', {
          data_id: this.state.osint,
          analyzing_type: this.state.type,
          malicious_level: 0,
      }).then(response => {
        if (response.data.malicious_level == 1) {
          response.data.malicious_level = 'Dangerous'
        } else if (response.data.malicious_level == 2) {
          response.data.malicious_level = 'Suspicious'
        } else if (response.data.malicious_level == 3) {
          response.data.malicious_level = 'Safe';
        } else {
          response.data.malicious_level = 'Unknown'
        }
        this.setState({result: response});
        console.log(this.state.result);
      }).catch(function (error) {
          console.log(error);
      });
      console.log(this.state.type);
    }
    // if (this.state.result) {
    //   if (this.state.result.data.malicious_level == 1) {
    //     malicious_level = 'Dangerous';
    //   } else if (this.state.result.data.malicious_level == 2) {
    //     malicious_level = 'Suspicious';
    //   } else if(this.state.result.data.malicious_level == 3) {
    //     malicious_level = 'Safe';
    //   } else {
    //     malicious_level = 'None';
    //   }
    // } else {
    //   malicious_level = null;
    // }

  }

  render() {
    return (
      <>
        <h1>Search from OSINT</h1>
        <Form style={{ margin: '30px' }} >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>OSINT you want to know</Form.Label>
            <Form.Control name='osint' type='text' placeholder='Input OSINT to search' onChange={this.handleChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>select OSINT type</Form.Label>
            <Form.Control  name="type" onChange={this.handleChange} as="select">
              <option>---</option>
              <option>IP ADDRESS</option>
              <option>DOMAIN</option>
              <option>FILEHASH</option>
            </Form.Control>
          </Form.Group>

          <Button style={{ float: 'right' }} onClick={this.handleSubmit}>Search OSINT</Button>
        </Form>

        {this.state.result ? (
          // { this.state.result.data.malicious_level ?}
          <>
            <h1 style={{ marginTop: '100px'}}>OSIETE Osint Result</h1>
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
                  <td>{this.state.result.data.owner}</td>
                </tr>
                <tr>
                  <td>gui</td>
                  <td>{this.state.result.data.gui}</td>
                </tr>
                <tr>
                  <td>Malicious Level</td>
                  <td>{this.state.result.data.malicious_level}</td>
                </tr>
              </tbody>
            </Table>
          </>
        ) : (
            null
        )}  

      </>
    );
  }
}
