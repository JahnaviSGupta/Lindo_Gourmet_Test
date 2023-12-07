import React from "react";
import Checkbox from "../Helpers/Checkbox.jsx";
import {
  QuantityElement,
  SelectOptions,
  SetupElement,
} from "./elementRenderer.jsx";

export default function JsonToReact({ jsonData }) {
  //TODO - Design the custom handling of inputs
  // Axios calls to the server for handling inputs
  // UseState variable to track changes in inputs

  // Helper function to handle text input change
  const handleInputChange = (option) => {
    console.log("Input Change Handled: " + option);
  };

  // Helper function to handle file change
  const handleFileChange = (name, file) => {
    console.log("File Change Handled: " + name + file);
  };

  // Helper function to handle submission
  const handleSubmit = () => {
    // Add axios calls here to submit the data
    console.log("Submitted Data");
  };

  return (
    <div className="w-[400px] mx-auto">
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
                    <>
                      <label>{element.label}: </label>
                      <input
                        type="file"
                        name={element.name}
                        onChange={(e) =>
                          handleFileChange(element.name, e.target.files[0])
                        }
                      />
                    </>
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
