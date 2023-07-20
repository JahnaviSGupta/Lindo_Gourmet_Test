import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from "react-router-bootstrap";

function DashBuyAgainCard(props) {
  return (
    <Card style={{ width: '16rem' }}>
      <Card.Img className = "buyAgainPic" variant="top" src={`${props.picture}`} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <LinkContainer to="/about">
        <Button className="categoryButton" variant="primary">Go somewhere</Button>
        </LinkContainer>
        
      </Card.Body>
    </Card>
  );
}

export default DashBuyAgainCard;

// ${process.env.PUBLIC_URL}