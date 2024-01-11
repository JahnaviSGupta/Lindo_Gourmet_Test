/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React, { useState } from "react";
import Draggable from "react-draggable";
export default ({
  themeNumber,
  theme1Style,
  setTheme1Style,
  theme4Style,
  setTheme4Style,
}) => {
  const [currentColor, setCurrentColor] = useState("yellow");

  const handleColorClick = (color) => {
    setCurrentColor(color);
  };

  const getImageForColor = () => {
    switch (currentColor) {
      case "black":
        return `${process.env.PUBLIC_URL}/assets/images/black_tshirt.png`;
      case "yellow":
        return `${process.env.PUBLIC_URL}/assets/images/yellow_tshirt.png`;
      case "blue":
        return `${process.env.PUBLIC_URL}/assets/images/blue_tshirt.png`;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              height: 250,
              width: 250,
              position: "relative",
            }}
          >
            {currentColor && (
              <div>
                <img
                  src={getImageForColor()}
                  alt={`Image for ${currentColor}`}
                  style={{
                    position: "absolute",
                    height: "100%",
                  }}
                />
              </div>
            )}
          </div>
        </div>
        <div
          id="my-node"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          {themeNumber === 1 && (
            <ThemeOne customStyle={theme1Style} setStyle={setTheme1Style} />
          )}
          {themeNumber === 4 && (
            <ThemeFour customStyle={theme4Style} setStyle={setTheme4Style} />
          )}
        </div>
        <div>
          <button
            style={{
              backgroundColor: "yellow", // Set your desired background color for the button
              padding: "10px", // Set your desired padding
              margin: "5px", // Set your desired margin
              border: "none", // Remove the default button border
              cursor: "pointer", // Set cursor to pointer for better UX
            }}
            onClick={() => handleColorClick("yellow")}
          ></button>
          <button
            style={{
              backgroundColor: "black", // Set your desired background color for the button
              padding: "10px", // Set your desired padding
              margin: "5px", // Set your desired margin
              border: "none", // Remove the default button border
              cursor: "pointer", // Set cursor to pointer for better UX
            }}
            onClick={() => handleColorClick("black")}
          ></button>
          <button
            style={{
              backgroundColor: "#6299DD", // Set your desired background color for the button
              padding: "10px", // Set your desired padding
              margin: "5px", // Set your desired margin
              border: "none", // Remove the default button border
              cursor: "pointer", // Set cursor to pointer for better UX
            }}
            onClick={() => handleColorClick("blue")}
          ></button>
        </div>
      </div>
    </div>
  );
};

const ThemeOne = ({ customStyle }) => {
  return (
    <Draggable>
      <div
        style={{
          background: customStyle.backColor ? customStyle.backColor : "orange",
          display: "flex",
          justifyContent: "center",
          height: 30,
          width: 70,
          margin: "auto",
          marginTop: 40,
          borderRadius: 5,
          flexDirection: "column",
          textAlign: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            fontWeight: "800",
            fontSize: 12,
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            top: -2,
            width: "100%",
          }}
          className="font1"
        >
          {customStyle.topText ? customStyle.topText : "Show Me"}
        </div>
        <div
          style={{
            fontWeight: "800",
            fontSize: 14,
            position: "absolute",
            marginBottom: 7,
            top: 10,
            width: "100%",
          }}
          className="font1"
        >
          {customStyle.bottomText ? customStyle.bottomText : "Text!"}
        </div>
      </div>
    </Draggable>
  );
};

//Theme Three - Overlay on the T-Shirt
const ThemeFour = ({ customStyle }) => {
  return (
    <Draggable>
      <div
        style={{
          position: "absolute",
          zIndex: 100,
          marginTop: 15,
        }}
      >
        <div
          style={{
            background: customStyle.backColor
              ? customStyle.backColor
              : "orange",
            display: "flex",
            justifyContent: "center",
            height: 110,
            width: 100,
            borderRadius: 20,
            margin: "auto",
            marginTop: 40,
            flexDirection: "row",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "0 5px",
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: 10,
              width: "100%",
            }}
          >
            <img
              src={
                customStyle.topLogo
                  ? customStyle.topLogo
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"
              }
              height="40px"
            />
          </div>
          <div
            style={{
              fontWeight: "800",
              fontSize: 18,
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              top: 50,
              width: "100%",
            }}
            className="font1"
          >
            {customStyle.topText ? customStyle.topText : "I Love"}
          </div>
          <div
            style={{
              fontWeight: "800",
              fontSize: 18,
              position: "absolute",
              marginTop: 10,
              top: 60,
              width: "100%",
            }}
            className="font1"
          >
            {customStyle.bottomText ? customStyle.bottomText : "Ramtoo"}
          </div>
        </div>
      </div>
    </Draggable>
  );
};
