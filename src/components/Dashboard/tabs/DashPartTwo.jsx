import { Table } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { LinkContainer } from "react-router-bootstrap";

function DashPartTwo() {
  return (
    <Table className="PartTwoTable">
      <Row xs={1} md={2} className="g-4">
        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Profile</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Order History</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Wishlist</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Payment Methods</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row xs={1} md={2} className="g-4">
        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Login and Security</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Your Address</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Your Messages</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col className="CardSize">
          <Card className="dashPartOneCard">
            <Card.Img
              className="Dashpic"
              variant="top"
              src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`}
            />
            <Card.Body>
              <LinkContainer to="/profile">
                <Card.Title className="dashCard">Gift Cards</Card.Title>
              </LinkContainer>

              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Table>
  );
}

export default DashPartTwo;
