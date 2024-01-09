import { useEffect, useState } from "react";
import BasicExample from "../Helpers/Cards/Category";

function HomePartTwoComponent() {
  const exampleData = [
    {
      id: 1,
      text: "T-Shirt",
      description: "Customize T-shirt",
      image: "ProductTshirt",
    },
    {
      id: 2,
      text: "Laptop",
      description: "Customize Laptop",
      image: "ProductLaptop",
    },
    {
      id: 6,
      text: "Shoes",
      description: "Customize Shoes",
      image: "ProductCustomizedShoes",
    },
    {
      id: 7,
      text: "Pouch",
      description: "Customize Pouch",
      image: "ProductCustomizedPouch",
    },
    {
      id: 8,
      text: "Cap",
      description: "Customize Cap",
      image: "ProductCustomizedCap",
    },
    {
      id: 3,
      text: "Coffee Mug",
      description: "Customize Coffee Mug",
      image: "ProductCoffeeMug",
    },
    {
      id: 4,
      text: "Sunglass",
      description: "Customize Sunglass",
      image: "ProductSunglass",
    },
    {
      id: 5,
      text: "Vase",
      description: "Customize Vase",
      image: "ProductVase",
    },
    {
      id: 9,
      text: "Drawstring Bag",
      description: "Customize Drawstring Bag",
      image: "ProductCustomizedDrawstringBag",
    },
    {
      id: 10,
      text: "Coaster",
      description: "Customize Coaster",
      image: "ProductCustomizedCoaster",
    },
    {
      id: 11,
      text: "Key Chain",
      description: "Customize Key Chain",
      image: "keychain",
    },
    {
      id: 12,
      text: "Bottle",
      description: "Customize Bottle",
      image: "ProductCustomizedBottle",
    },
    {
      id: 13,
      text: "Plate",
      description: "Customize Plate",
      image: "plate",
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

  return (
    <div>
      <div className="flex flex-row flex-wrap">
        <h1 className="flex-[6] font-600 mb-[10px] text-[40px]">Products</h1>
        <div className="">
          <button className="btn bg-qteal rounded-lg text-white px-5 py-2 font-600">
            <a href="/generic-product">More</a>
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
              <BasicExample
                title={example.text}
                description={example.description}
                buttonText="Customize"
                buttonLink="/generic-product"
                image={example.image}
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
    </div>
  );
}

export default HomePartTwoComponent;
