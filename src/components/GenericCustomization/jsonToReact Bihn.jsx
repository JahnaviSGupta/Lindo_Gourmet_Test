/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Checkbox from "../Helpers/Checkbox.jsx";
import {
  QuantityElement,
  SelectOptions,
  SetupElement,
} from "./elementRenderer.jsx";

export default function JsonToReact({ jsonData }) {
  // TODO - Design the custom handling of inputs
  // Axios calls to the server for handling inputs
  // UseState variable to track changes in inputs

  // Helper function to handle text input change
  const handleInputChange = (option) => {
    console.log(`Input Change Handled: ${option}`);
  };

  // Helper function to handle file change
  const handleFileChange = (name, file) => {
    console.log(`File Change Handled: ${name}${file}`);
  };

  // Helper function to handle submission
  const handleSubmit = () => {
    // Add axios calls here to submit the data
    console.log("Submitted Data");
  };

  const productsImg = [
    {
      id: 1,
      src: "product-details-1.png",
      color: "#FFBC63",
      images: [
        { id: 1, src: "product-details-1.png" },
        { id: 2, src: "product-details-2.png" },
        // Other images for color "#FFBC63"
      ],
    },
    {
      id: 2,
      src: "product-details-3.png",
      color: "#649EFF",
      images: [
        { id: 1, src: "product-details-3.png" },
        { id: 2, src: "product-details-4.png" },
        // Other images for color "#649EFF"
      ],
    },
    {
      id: 3,
      src: "product-details-5.png",
      color: "#FFFFFF",
      images: [
        { id: 1, src: "product-details-5.png" },
        { id: 2, src: "product-details-1.png" },
        // Other images for color "#FFFFFF"
      ],
    },
    // Other product colors
  ];

  const [currentColor, setCurrentColor] = useState(productsImg[0].color);
  const [currentImages, setCurrentImages] = useState(productsImg[0].images);
  const [currentSrc, setCurrentSrc] = useState(productsImg[0].src);
  const [activeIndex, setActiveIndex] = useState(0);

  const changeColorHandler = (color, images, src) => {
    setCurrentColor(color);
    setCurrentImages(images);
    setCurrentSrc(src);
    setActiveIndex(0);
  };

  const changeImgHandler = (src, index) => {
    setCurrentSrc(src);
    setActiveIndex(index);
  };

  return (
    <div className="product-view w-full lg:flex justify-between">
      {/* Image Gallery */}
      <div data-aos="fade-right" className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px]">
        <div className="w-full relative">
          <div
            data-aos="fade-right"
            className="lg:w-full xl:mr-[70px] lg:mr-[50px]"
          >
            <div className="w-full">
              <Carousel
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                autoPlay
                selectedItem={currentImages.findIndex(
                  (image) => image.src === currentSrc
                )}
              >
                {currentImages.map((img) => (
                  <div
                    key={img.id}
                    onClick={() => changeImgHandler(img.src)}
                    className="h-[600px] flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/${img.src}`}
                      alt=""
                      className="object-contain"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {currentImages &&
              currentImages.length > 0 &&
              currentImages.map((img, index) => (
                <div
                  onClick={() => changeImgHandler(img.src, index)}
                  key={img.id}
                  className={`w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer ${
                    currentSrc === img.src ? "ring-2" : ""
                  }`}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/${img.src}`}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            {currentImages.length < productsImg[0].images.length && (
              <div>
                <button
                  type="button"
                  className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer flex justify-center items-center"
                >
                  <FaPlus size={40} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Selection Options */}
      <div className="flex flex-col items-center">
        <div className="text-black text-xl font-bold">
          {jsonData.element.toUpperCase()}
        </div>
        {jsonData.elements.map((element, index) => (
          <div key={index}>
            {(() => {
              switch (element.element) {
                case "Select":
                  return (
                    <SelectOptions
                      element={element}
                      handleInputChange={handleInputChange}
                    />
                  );
                case "Boolean":
                  return (
                    <div className="flex flex-row gap-3 justify-center">
                      <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
                        {element.label}
                      </span>
                      <Checkbox />
                    </div>
                  );
                case "Integer":
                  return (
                    <div className="">
                      <label className="text-sm font-normal uppercase text-qgray mb-[14px]">
                        {element.label}:{" "}
                      </label>
                      <input
                        type="number"
                        name={element.name}
                        onChange={(e) =>
                          handleInputChange(element.name, e.target.value)
                        }
                        min={element.minimum}
                        max={element.maximum}
                      />
                    </div>
                  );
                case "File":
                  return (
                    <div className="p-4">
                      <label>{element.label}: </label>
                      <input
                        type="file"
                        name={element.name}
                        onChange={(e) =>
                          handleFileChange(element.name, e.target.files[0])
                        }
                      />
                    </div>
                  );
                case "Quantity":
                  return (
                    <QuantityElement
                      label={element.label}
                      price={element.price}
                      onChange={(e) =>
                        handleInputChange(element.name, e.target.value)
                      }
                    />
                  );
                case "Setup":
                  return (
                    <SetupElement label={element.label} price={element.price} />
                  );
                default:
                  return null;
              }
            })()}
          </div>
        ))}
        {/* <div
          data-aos="fade-up"
          className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px]"
        > */}
        {/* Color Selectors */}
        <div data-aos="fade-up" className="colors mb-[30px]">
          <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
            AVAILABLE COLORS
          </span>
          <div className="flex space-x-4 items-center">
            {productsImg &&
              productsImg.length > 0 &&
              productsImg.map((img) => (
                <div key={img.id}>
                  {img.color && img.color !== "" && (
                    <button
                      onClick={() =>
                        changeColorHandler(img.color, img.images, img.src)
                      }
                      type="button"
                      style={{ "--tw-ring-color": `${img.color}` }}
                      className={`w-[20px] h-[20px] rounded-full focus:ring-2 ring-offset-2 flex justify-center items-center ${
                        currentColor === img.color ? "ring-2" : ""
                      }`}
                    >
                      <span
                        style={{ background: `${img.color}` }}
                        className="w-[20px] h-[20px] block rounded-full border"
                      ></span>
                    </button>
                  )}
                </div>
              ))}
            <div>
              <button
                type="button"
                className="w-[20px] h-[20px] rounded-full flex justify-center items-center text-qgray border border-qgray-border"
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-[#028090] hover:bg-cyan-900 text-sm text-white font-semibold w-full h-10"
          onClick={handleSubmit}
        >
          Upload Design
        </button>
        {/* </div> */}
      </div>
    </div>
  );
}
