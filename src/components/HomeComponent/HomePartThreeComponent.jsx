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
            <h1 className="font-600 mb-[44px] text-[40px]">Lorem Ipsum</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          {showImage && (
            <div className="flex-[4] col-lg-6">
              <LinkContainer to="/about">
                <p>
                  <img
                    className="rounded-lg w-[350px] h-[300px]"
                    src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
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
                  src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
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
                  src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
                  alt="img"
                ></img>
              </p>
            </LinkContainer>
          </div>
        </div>
      )}
      <div>
        <button
          className="btn m-[3%] bg-qyellow rounded-lg text-white px-[60px] py-[12px] font-600"
          onClick={handleMoreInfo}
        >
          Learn More
        </button>
        {showMoreInfo > 0 && (
          <p className="ml-[3%]">load times: {showMoreInfo}</p>
        )}
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
