import { useEffect, useState } from "react";
import FeaturedProduct from "../Helpers/Cards/FeaturedProduct";

function HomePartThreeComponent({ showImage }) {
  const exampleData = [
    {
      id: 1,
      text: "T-Shirt",
      description: "Customize T-shirt",
      image: "ProductTshirt",
      cost: 244.99,
    },
    {
      id: 2,
      text: "Laptop",
      description: "Customize Laptop",
      image: "ProductLaptop",
      cost: 254.99,
    },
    {
      id: 6,
      text: "Shoes",
      description: "Customize Shoes",
      image: "ProductCustomizedShoes",
      cost: 234.99,
    },
    {
      id: 7,
      text: "Pouch",
      description: "Customize Pouch",
      image: "ProductCustomizedPouch",
      cost: 264.99,
    },
    {
      id: 8,
      text: "Cap",
      description: "Customize Cap",
      image: "ProductCustomizedCap",
      cost: 296.99,
    },
    {
      id: 3,
      text: "Coffee Mug",
      description: "Customize Coffee Mug",
      image: "ProductCoffeeMug",
      cost: 234.99,
    },
    {
      id: 4,
      text: "Sunglass",
      description: "Customize Sunglass",
      image: "ProductSunglass",
      cost: 254.99,
    },
    {
      id: 5,
      text: "Vase",
      description: "Customize Vase",
      image: "ProductVase",
      cost: 254.99,
    },
    {
      id: 9,
      text: "Drawstring Bag",
      description: "Customize Drawstring Bag",
      image: "ProductCustomizedDrawstringBag",
      cost: 254.99,
    },
    {
      id: 10,
      text: "Coaster",
      description: "Customize Coaster",
      image: "ProductCustomizedCoaster",
      cost: 254.99,
    },
    {
      id: 11,
      text: "Key Chain",
      description: "Customize Key Chain",
      image: "keychain",
      cost: 254.99,
    },
    {
      id: 12,
      text: "Bottle",
      description: "Customize Bottle",
      image: "ProductCustomizedBottle",
      cost: 254.99,
    },
    {
      id: 13,
      text: "Plate",
      description: "Customize Plate",
      image: "plate",
      cost: 254.99,
    },
    { id: 14, text: "Example 14" },
    { id: 15, text: "Example 15" },
    { id: 16, text: "Example 16" },
    { id: 17, text: "Example 17" },
    { id: 18, text: "Example 18" },
    { id: 19, text: "Example 19" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const maxCardCount = 13;

  const handleScroll = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    const scrollableDistance = scrollWidth - clientWidth;
    const scrollPercentage = (scrollLeft / scrollableDistance) * 100;

    setScrollPosition(scrollPercentage);
  };

  useEffect(() => {
    const content = document.getElementById("content");
    content.addEventListener("scroll", handleScroll);

    return () => {
      content.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //updates from product card.
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
      <div className="flex flex-row flex-wrap">
        <h1 className="flex-[6] font-600 mb-[10px] text-[40px]">
          Featured Products
        </h1>
        <div className="">
          <button className="btn bg-qteal rounded-lg text-white px-5 py-2 font-600">
            <a href="/generic-product">View Products</a>
          </button>
        </div>
      </div>
      <div className="homepage-middle-bar">
        <div
          id="content"
          className="flex flex-row nowrap overflow-x-auto space-x-[30px] product-items"
        >
          {exampleData.slice(0, maxCardCount).map((example) => (
            <div key={example.id} className="mt-[30px] mb-[50px]">
              <FeaturedProduct
                title={example.text}
                // description={example.description}
                // buttonText="Customize"
                buttonLink="/generic-product"
                image={example.image}
                cost={example.cost}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-[80%] h-[3px] bg-[#f1f1f1]">
          <div
            className="w-[50%] h-[3px] bg-[#8e8e8e]"
            style={{
              transform: `translateX(${scrollPosition}%)`,
            }}
          ></div>
        </div>
      </div>

      {/* <p class="featured-title flex justify-content-center">
        Featured Products
      </p>
      <br></br>
      <div class="flex justify-content-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product2.png`}
          class="w-60 h-64 m-3"
          alt="Description of the image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product4.png`}
          class="w-60 h-64 m-3"
          alt="Description of the image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product3.png`}
          class="w-60 h-64 m-3"
          alt="Description of the image"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
          class="w-60 h-64 m-3"
          alt="Description of the image"
        />
      </div> */}
      {/* <div className="">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="font-600 mb-4 text-2xl md:text-4xl home-title">
              Our Vision
            </h1>
            <p className="font-400 mb-[22px] text-justify text-sans-serif italic home-parag">
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
      </div> */}

      {/* {showImage && (
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
      )} */}
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
