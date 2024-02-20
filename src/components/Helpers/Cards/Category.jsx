import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";

// function BasicExample() {
//   return (
//     <Card style={{ width: '16rem' }}>
//       <Card.Img  variant="top" src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <LinkContainer to="/about">
//         <Button className="categoryButton" variant="primary">Go somewhere</Button>
//         </LinkContainer>

//       </Card.Body>
//     </Card>
//   );
// }

function BasicExample({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  // cost,
  dollar,
}) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}/assets/images/home/${image}.jpg`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* <Card.Text>{cost}</Card.Text> */}
        <LinkContainer to={buttonLink}>
          <Button className="categoryButton" variant="primary">
            {buttonText}
          </Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
