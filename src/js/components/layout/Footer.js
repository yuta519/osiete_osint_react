import React from "react";
import {Row} from "react-bootstrap"
import ReactDOM from "react-dom";

export default class Footer extends React.Component {
  render() {
    const footerStyles = {
      marginTop: "30px"
    };
    return (
      <footer style={footerStyles}>
          <Row>
            <p>Copyright &copy; osiete_osint.jp</p>
          </Row>
      </footer>
    );
  }
}

