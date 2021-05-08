import React from "react";

import axios from "axios";
import { Container , Form, Row, Col, Button} from 'react-bootstrap'


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
    if (this.state.type == null) {
      alert('Please select valid OSINT type.')
    } else {
      event.preventDefault();
      console.log(this.state);  
      axios.post('http://localhost:8000/osints/api', {
          data_id: this.state.osint,
          analyzing_type: this.state.type,
          malicious_level: 0,
      }).then(response => {
        this.setState({result: response});
        console.log(response);
      }).catch(function (error) {
          console.log(error);
      });
      console.log(this.state.type);
    }

  }

  render() {
    return (
      <Container style={{ marginTop: '100px' }}>
        <h1>Search from OSINT</h1>
        <Form style={{ margin: '50px' }} >
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
          {this.state.result ? (
            <>
              <p>{this.state.result.data.owner}</p>
              <p>{this.state.result.data.gui}</p>
              <p>{this.state.result.data.malicious_level}</p>
            </>
          ) : (
              null
          )}  
          <Button style={{ margin: '30px', float: 'right' }} onClick={this.handleSubmit}>Search OSINT</Button>
        </Form>
      </Container>
    );
  }
}
