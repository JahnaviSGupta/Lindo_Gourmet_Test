import React from "react";
import InputQuantityCom from "../Helpers/InputQuantityCom";
import Selectbox from "../Helpers/Selectbox";

// Custom components must be hardcoded
// Use of xml with generic html tags will make more sense

// Custom Component for Select Tags
export const SelectOptions = ({ element, handleInputChange }) => {
  const optionData = [];

  element.elements.map((option, index) => (optionData[index] = option.label));

  return (
    <div data-aos="fade-up" className="product-size mb-[30px]">
      <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
        {element.label}
      </span>
      <div className="w-[200px]">
        <div className=" border border-qgray-border h-[50px] flex justify-between items-center px-6 cursor-pointer">
          <Selectbox
            className="w-full"
            datas={optionData}
            action={handleInputChange}
          >
            {({ item }) => (
              <>
                <div>
                  <span className="text-[13px] text-qblack">{item}</span>
                </div>
                <div className="flex space-x-10 items-center">
                  {/* <span className="text-[13px] text-qblack">
                          3”W x 3”D x 7”H
                        </span> */}
                  <span>
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                        fill="#222222"
                      />
                    </svg>
                  </span>
                </div>
              </>
            )}
          </Selectbox>
        </div>
      </div>
    </div>
  );
};

// Custom component for Quantity Tags
export const QuantityElement = ({ label, price, onChange }) => {
  return (
    <>
      <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
        QUANTITY: {label} - ${price}
      </span>
      <div className="flex flex-row justify-center items-center">
        <InputQuantityCom />
      </div>
    </>
  );
};

// Custom component for Setup Tags
export const SetupElement = ({ label, price }) => {
  return (
    <div>
      <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
        {label} ${price}
      </span>
    </div>
  );
};