import { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";

function HomePartThreeComponent({ showImage }) {
  const [showMoreInfo, setShowMoreInfo] = useState(0);

  const handleMoreInfo = () => {
    if (showMoreInfo == 0) {
      setShowMoreInfo(1);
    } else if (showMoreInfo > 0) {
      setShowMoreInfo((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <div className="">
        <div className="flex flex-row space-x-[231px]">
          <div className="flex-[8] col-lg-6">
            <h1 className="font-600 mb-[44px] text-[40px]">Our Vision</h1>
            <p className="font-400 mb-[22px] text-justify text-sans-serif italic">
            At LindoGourmet, we envision a world where self-expression and uniqueness take center stage.
            We believe that every individual is unique, and their possessions should reflect that distinctiveness. 
            Our mission is to provide a platform that enables you to break away 
            from the limitations of mass-produced goods and embrace the joy of owning products that are as unique as you are.
            </p>
          </div>
          {showImage && (
            <div className="flex-[4] col-lg-6">
              <LinkContainer to="/about">
                <p>
                  <img
                    className="rounded-lg w-[350px] h-[300px]"
                    src={`${process.env.PUBLIC_URL}/assets/images/home/home2.jpg`}
                    alt="Products-img"
                  ></img>
                </p>
              </LinkContainer>
            </div>
          )}
        </div>
      </div>

      {showImage && (
        <div className="flex flex-row space-x-[10%] mt-[5%]">
          <div className="flex-[6] col-lg-6">
            <LinkContainer to="/about">
              <p>
                <img
                  className="rounded-lg h-[200px] w-full"
                  src={`${process.env.PUBLIC_URL}/assets/images/home/home3.jpg`}
                  alt="img"
                ></img>
              </p>
            </LinkContainer>
          </div>
          <div className="flex-[6] col-lg-6">
            <LinkContainer to="/about">
              <p>
                <img
                  className="rounded-lg h-[200px] w-full"
                  src={`${process.env.PUBLIC_URL}/assets/images/home/home4.jpg`}
                  alt="img"
                ></img>
              </p>
            </LinkContainer>
          </div>
        </div>
      )}
      {/* <div>
        <button
          className="btn m-[3%] bg-qyellow rounded-lg text-white px-[60px] py-[12px] font-600"
          onClick={handleMoreInfo}
        >
          Learn More
        </button>
        {showMoreInfo > 0 && (
          <p className="ml-[3%]">load times: {showMoreInfo}</p>
        )}
      </div> */}
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
