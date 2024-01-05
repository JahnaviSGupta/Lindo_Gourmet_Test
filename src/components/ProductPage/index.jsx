import { useState } from "react";
import Layout from "../Layout";

export default function ProductPage() {
  const [categories, setCategories] = useState([
    { id: 1, name: "Shirt", checked: false },
    { id: 2, name: "Dress", checked: false },
    { id: 3, name: "Pants", checked: false },
    { id: 4, name: "Shoes", checked: false },
    { id: 5, name: "Kids Shirts", checked: false },
    { id: 6, name: "Casual", checked: false },
    { id: 7, name: "Blazer Dress", checked: false },
    { id: 8, name: "Sundress", checked: false },
    { id: 9, name: "Asymmetrical", checked: false },
    { id: 10, name: "Sport", checked: false },
    { id: 11, name: "Elegant", checked: false },
    { id: 12, name: "Jackets", checked: false },
  ]);
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
  };

  const filterImages = (updatedCategories) => {
    const checkedCategories = updatedCategories.filter(
      (category) => category.checked
    );
    if (checkedCategories.length === 0) {
      setFilteredImages([]);
    } else {
      const selectedCategories = checkedCategories.map(
        (category) => category.name
      );
      const filtered = allImages.filter((image) =>
        selectedCategories.includes(image.category)
      );
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

  return (
    <Layout>
      <div class="divide-y-2">
        <div class="text-2xl font-bold px-[10] pt-[30px] pb-[5px] flex justify-content-center">
          Products
        </div>

        {/* <!-- Categories and images --> */}
        <div class="prod">
          <div class="product-container ml-3">
            <div class="products pt-[10px] flex">
              <div class="categories w-52">
                <h2 class="pb-3 px-2 category-title">Categories&nbsp; {">"}</h2>

                {categories.map((category) => (
                  <div key={category.id}>
                    <div class="pr-4 flex pb-3">
                      <input
                        type="checkbox"
                        id={category.name}
                        checked={category.checked}
                        onChange={() => handleCheckboxChange(category.id)}
                      />
                      <div class="pl-4">
                        <label htmlFor={category.name}>{category.name}</label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div class="productImages1 pl-4 ml-1">
                {/* Render images based on filteredImages */}
                <div class="flex flex-wrap">
                  {filteredImages.map((image) => (
                    <img
                      key={image.id}
                      src={image.src} // Make sure to use the correct image property (src or path)
                      class="w-40 h-48"
                      alt={image.alt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p class="featured-title flex justify-content-center">
            Featured Products
          </p>
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
        </div>
        <div>
          <br />
        </div>
      </div>
    </Layout>
  );
}
