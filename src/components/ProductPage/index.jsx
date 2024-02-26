import React, { useEffect, useState } from "react";
import FeaturedProduct from "../Helpers/Cards/FeaturedProduct";
import Layout from "../Layout";

export default function ProductPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "T-Shirt", checked: false },
    { id: 2, name: "Laptop", checked: false },
    { id: 3, name: "Pouch", checked: false },
    { id: 4, name: "Shoes", checked: false },
    { id: 5, name: "Cap", checked: false },
    { id: 6, name: "Coffee Mug", checked: false },
    { id: 7, name: "Sunglass", checked: false },
    { id: 8, name: "Vase", checked: false },
    { id: 9, name: "Drawstring Bag", checked: false },
    { id: 10, name: "Coaster", checked: false },
    { id: 11, name: "Key Chain", checked: false },
    { id: 12, name: "Bottle", checked: false },
  ]);
  const maxCardCount = 13;
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
      id: 3,
      text: "Shoes",
      description: "Customize Shoes",
      image: "ProductCustomizedShoes",
      cost: 234.99,
    },
    {
      id: 4,
      text: "Pouch",
      description: "Customize Pouch",
      image: "ProductCustomizedPouch",
      cost: 264.99,
    },
    {
      id: 5,
      text: "Cap",
      description: "Customize Cap",
      image: "ProductCustomizedCap",
      cost: 296.99,
    },
    {
      id: 6,
      text: "Coffee Mug",
      description: "Customize Coffee Mug",
      image: "ProductCoffeeMug",
      cost: 234.99,
    },
    {
      id: 7,
      text: "Sunglass",
      description: "Customize Sunglass",
      image: "ProductSunglass",
      cost: 254.99,
    },
    {
      id: 8,
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


  const [filteredImages, setFilteredImages] = useState([]);
  const handleCheckboxChange = (id) => {
    const updatedCategories = categories.map((category) => {
      if (category.id === id) {
        return { ...category, checked: !category.checked };
      }
      return category;
    });

    setCategories(updatedCategories);
    filterImages(updatedCategories);
    console.log(updatedCategories);
  };

  const filterImages = (updatedCategories) => {
    const checkedCategories = updatedCategories.filter(
      (category) => category.checked
    );
    console.log(checkedCategories);
    if (checkedCategories.length === 0) {
      setFilteredImages([]);
    } else {
      const selectedCategories = checkedCategories.map(
        (category) => category.name
      );
      console.log(selectedCategories);
      const filtered = exampleData.filter((item) =>
        selectedCategories.includes(item.text)
      );
      console.log(filtered);
      setFilteredImages(filtered);
    }
  };
  const allImages = [
    {
      id: 1,
      category: "Shirt",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`,
      alt: "Description of the image",
    },
    {
      id: 2,
      category: "Jackets",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product2.png`,
      alt: "Description of the image",
    },
    {
      id: 3,
      category: "Elegant",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product4.png`,
      alt: "Description of the image",
    },
    {
      id: 4,
      category: "Sport",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product3.png`,
      alt: "Description of the image",
    },
    {
      id: 5,
      category: "Shirt",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`,
      alt: "Description of the image",
    },
    {
      id: 6,
      category: "Sport",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product2.png`,
      alt: "Description of the image",
    },
    {
      id: 7,
      category: "Elegant",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product3.png`,
      alt: "Description of the image",
    },
    {
      id: 8,
      category: "Shirt",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product3.png`,
      alt: "Description of the image",
    },
    {
      id: 9,
      category: "Sport",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product3.png`,
      alt: "Description of the image",
    },
    {
      id: 10,
      category: "Casual",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product4.png`,
      alt: "Description of the image",
    },
    {
      id: 11,
      category: "Shirt",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product4.png`,
      alt: "Description of the image",
    },
    {
      id: 12,
      category: "Pants",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product4.png`,
      alt: "Description of the image",
    },
    {
      id: 13,
      category: "Dress",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product3.png`,
      alt: "Description of the image",
    },
    {
      id: 14,
      category: "Dress",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product2.png`,
      alt: "Description of the image",
    },
    {
      id: 15,
      category: "Kids Shirts",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`,
      alt: "Description of the image",
    },
    {
      id: 16,
      category: "Kids Shirts",
      src: `${process.env.PUBLIC_URL}/assets/images/productsPage/Product4.png`,
      alt: "Description of the image",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceDisplay, setPriceDisplay] = useState('Price: $500');

  useEffect(() => {
    const slider = document.getElementById("priceSlider");
    const handleSliderChange = () => {
      const price = parseInt(slider.value);
      setPriceDisplay(`Price: $${price}`);
      filterProducts(price);
    };
    slider.addEventListener("input", handleSliderChange);

    return () => {
      slider.removeEventListener("input", handleSliderChange);
    };
  }, []);

  const filterProducts = (price) => {
    // Replace 'exampleData' with your actual product data array
    const filtered = exampleData.filter(item => item.cost <= price);
    setFilteredProducts(filtered);
  }
  

  return (
    <Layout>
      <div>
        <div>
          <div class="text-2xl font-bold px-[10] pt-[30px] pb-[5px] flex justify-content-center">
            Products
          </div>
          <div className="prod-container">
            <div className="categories ml-6">
              <h2 className="category-title ml-20">Categories&nbsp; {">"}</h2>
              <div class="fixed-container ml-20">
                {categories.map((category) => (
                  <div key={category.id}>
                    <div class="flex ml-2 pb-2">
                      <input
                        type="checkbox"
                        id={category.name}
                        checked={category.checked}
                        onChange={() => handleCheckboxChange(category.id)}
                      />
                      <div class="pl-2 ml-3">
                        <label htmlFor={category.name}>{category.name}</label>
                      </div>
                    </div>
                  </div>
                ))}
              {/* Price Range Slider  */}
              <h2 className="category-title">Price Range&nbsp; {">"}</h2>
              <div className="slider-container">
                <input type="range" min="0" max="100" value="50" className="slider" id="myRange" />
                  <div class="slider-labels">
                    <span class="min-label">$0</span>
                    <span class="max-label">$1000</span>
                  </div>
                  <div id="priceDisplay">Price: $500</div>
              </div>
              </div>
            </div>


            
            <div className="images m-2">
              <div className="card-img ml-10">
                <div className="flex flex-wrap">
                  {filteredImages.length > 0 && (
                    <div className="fixed-container">
                      <div className="flex flex-wrap">
                        {filteredImages.map((item) => (
                          <div key={item.id} className="p-3">
                            <FeaturedProduct
                              title={item.text}
                              buttonLink="/generic-product"
                              image={item.image}
                              cost={item.cost}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
          </div>
          <div className="flex justify-content-center">
            <p class="featured-title flex justify-content-center">
              Featured Products
            </p>
          </div>
          <br></br>
          <div class="productimg2 flex justify-content-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product2.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product4.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product3.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
          </div>
          <div>
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
}
