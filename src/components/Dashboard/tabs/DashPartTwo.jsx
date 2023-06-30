
// import { LinkContainer } from "react-router-bootstrap";

// function DashPartTwo() {
//   return (
//     <div>
//         <div className="row">

//         <div className="colDash col-lg-4 recoSec">
//         <h2>Total Sales</h2>
//         <LinkContainer to="/about">  
//         <p className = "dashTwoTop"> 
            
//         <img
//             className="dashTwo-img"
//             src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
//             alt="homeOne-img"
//           ></img>
           
//           </p>
//           </LinkContainer>
//       </div>

//       <div className="colDash col-lg-4 recoSec">
//         <h2>Customers</h2>
//         <LinkContainer to="/about">  
//         <p className = "dashTwoTop"> 
            
//         <img
//             className="dashTwo-img"
//             src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
//             alt="homeOne-img"
//           ></img>
           
//           </p>
//           </LinkContainer>
//       </div>


//       <div className="colDash col-lg-4 recoSec">
//         <h2>Units sold</h2>
//         <LinkContainer to="/about">  
//         <p className = "dashTwoTop"> 
            
//         <img
//             className="dashTwo-img"
//             src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
//             alt="homeOne-img"
//           ></img>
           
//           </p>
//           </LinkContainer>
//       </div>

//     </div>

//     <div className="row">
//       <div className="column col-lg-6 recoSec">
//         <h2>Sales</h2>
//         <LinkContainer to="/about">  
//         <p> 
            
//         <img
//             class="homeThree-img"
//             src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
//             alt="homeOne-img"
//           ></img>
           
//           </p>
//           </LinkContainer>
//       </div>
//       <div className="column col-lg-6 recoSec">
//         <h2>Countries</h2>
//         <LinkContainer to="/about">  
//         <p> 
            
//         <img
//             class="homeThree-img"
//             src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
//             alt="homeOne-img"
//           ></img>
           
//           </p>
//           </LinkContainer>
//       </div>
//     </div>



//     </div>

//   );
// }

// export default DashPartTwo;



import { Tab } from 'bootstrap';
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { LinkContainer } from 'react-router-bootstrap';

function DashPartTwo() {
  return (
    <Table className = "PartTwoTable">
        <Row xs={1} md={2} className="g-4">
      
        <Col>
          <Card className='dashPartOneCard'>
            <Card.Img className = "Dashpic" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`} />
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

        <Col>
          <Card className='dashPartOneCard'>
            <Card.Img className = "Dashpic" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`} />
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

        <Col>
          <Card className='dashPartOneCard'>
            <Card.Img className = "Dashpic" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`} />
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

        <Col>
          <Card className='dashPartOneCard'>
            <Card.Img className = "Dashpic" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`} />
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
    <Col>
          <Card className='dashPartOneCard'>
            <Card.Img className = "Dashpic" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`} />
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

        <Col>
          <Card className='dashPartOneCard'>
            <Card.Img className = "Dashpic" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`} />
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

        <Col>
          <Card className='dashPartOneCard'>
            <Card.Img className = "Dashpic" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`} />
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

        <Col>
          <Card className='dashPartOneCard'>
            <Card.Img className = "Dashpic" variant="top" src={`${process.env.PUBLIC_URL}/assets/images/apple-store.png`} />
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


