import React from "react";
import { Card, CardDeck } from "react-bootstrap"


export default class Home extends React.Component {
  
  constructor(props) {
    super();
  }
  
  render() {
    const { name, slug, url } = this.props;
    return (
        <>
         <div style={{marginTop: 20, marginBottom: 20, width: 900}}>
            <CardDeck>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/100/100" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/100/100" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/100/100" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>
        </>
    //   <tr>
    //       <td><a href={slug}>{name}</a></td>
    //       <td><span>{url}</span></td>
    //   </tr>
    );
  }

}

