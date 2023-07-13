
import { LinkContainer } from "react-router-bootstrap";

function HomePartThreeComponent() {
  return (
    <div>
        <div className="row">
      <div className="column col-lg-6 recoSec">
        <h2>Products</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</p>
      </div>
      <div className="column col-lg-6 recoSec">
        <h2>Column 2</h2>
        <LinkContainer to="/about">  
        <p> 
            
        <img
            class="homeThree-img"
            src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
            alt="homeOne-img"
          ></img>
           
          </p>
          </LinkContainer>
      </div>
    </div>

    <div className="row">
      <div className="column col-lg-6 recoSec">
        <h2>Column 1</h2>
        <LinkContainer to="/about">  
        <p> 
            
        <img
            class="homeThree-img"
            src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
            alt="homeOne-img"
          ></img>
           
          </p>
          </LinkContainer>
      </div>
      <div className="column col-lg-6 recoSec">
        <h2>Column 2</h2>
        <LinkContainer to="/about">  
        <p> 
            
        <img
            class="homeThree-img"
            src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
            alt="homeOne-img"
          ></img>
           
          </p>
          </LinkContainer>
      </div>
    </div>



    </div>

  );
}

export default HomePartThreeComponent;




// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { LinkContainer } from "react-router-bootstrap";

// function BasicExample() {
//   return (
//     <Card style={{ width: '16rem' }}>
//       <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`} />
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

// export default BasicExample;
