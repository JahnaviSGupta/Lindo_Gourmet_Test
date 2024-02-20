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

function FeaturedProduct({
  title,
  description,
  buttonText,
  buttonLink,
  image,
  cost,
  dollar,
}) {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img
        variant="top"
        src={`${process.env.PUBLIC_URL}/assets/images/home/${image}.jpg`}
      />
      <Card.Body>
        <div className="text-muted d-flex justify-content-between mb-2">
          <Card.Title>{title}</Card.Title>

          {/* <Card.Text>{description}</Card.Text> */}

          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Favourite.png`}
            alt="Description of the image"
            className="smaller-image mr-3"
          />
        </div>
        <div className="text-muted d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/$.png`}
              alt="Description of the image"
              className="smaller-image p-2 mr-1 border-2"
            />
            <Card.Text>{cost}</Card.Text>
          </div>
          <LinkContainer to={buttonLink}>
            <Button className="categoryButton" variant="primary">
              {/* {buttonText} */}
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/Tools.png`}
                alt="Description of the image"
                className="smaller-image"
              />
            </Button>
          </LinkContainer>
          {/* <img
            src={`${process.env.PUBLIC_URL}/assets/images/Tools.png`}
            alt="Description of the image"
            className="smaller-image"
          /> */}
        </div>
        {/* <LinkContainer to={buttonLink}>
          <Button className="categoryButton" variant="primary">
            {buttonText}
          </Button>
        </LinkContainer> */}
      </Card.Body>
    </Card>
  );
}

export default FeaturedProduct;
