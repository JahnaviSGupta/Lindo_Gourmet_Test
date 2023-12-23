import { useState } from "react";

function HomePartThreeComponent({ showImage }) {
  const [showMoreInfo, setShowMoreInfo] = useState(0);

  const handleMoreInfo = () => {
    if (showMoreInfo == 0) {
      setShowMoreInfo(1);
    } else if (showMoreInfo > 0) {
      setShowMoreInfo((prevCount) => prevCount + 1);
    }
  };
}
//This is the code for the our vision part
/* return (
  <div>
    <div className="">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1 className="font-600 mb-4 text-2xl md:text-4xl">Our Vision</h1>
          <p className="font-400 mb-[22px] text-justify text-sans-serif italic">
            At LindoGourmet, we envision a world where self-expression and
            uniqueness take center stage. We believe that every individual is
            unique, and their possessions should reflect that distinctiveness.
            Our mission is to provide a platform that enables you to break
            away from the limitations of mass-produced goods and embrace the
            joy of owning products that are as unique as you are.
          </p>
        </div>
        {showImage && (
          <div className="md:w-1/2 md:pl-4 flex justify-end items-center">
            <LinkContainer to="/about">
              <p>
                <img
                  className="max-h-[455px] min-h-[155px] rounded"
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
      <div className="flex justify-center space-x-[10%] mt-[5%]">
        <div className="">
          <LinkContainer to="/about">
            <p>
              <img
                className="rounded-lg max-w-[855px] min-w-[155px] max-h-[455px] min-h-[155px] w-full"
                src={`${process.env.PUBLIC_URL}/assets/images/home/home3.jpg`}
                alt="img"
              ></img>
            </p>
          </LinkContainer>
        </div>
        <div className="">
          <LinkContainer to="/about">
            <p>
              <img
                className="rounded-lg max-w-[855px] min-w-[155px] max-h-[455px] min-h-[155px] w-full"
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
    </div> 
 </div>
);
*/

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
