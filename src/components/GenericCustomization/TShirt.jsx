/* eslint-disable react/no-array-index-key */
/* eslint-disable import/extensions */
import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import Draggable from "react-draggable";
import "react-resizable/css/styles.css";
export default ({
  themeNumber,
  theme1Style,
  setTheme1Style,
  theme4Style,
  setTheme4Style,
}) => {
  const [color, setColor] = useState("#000EE0");

  return (
    <div>
      <div>
        <div style={{ marginBottom: 20 }}>
          <div
            style={{
              height: 250,
              width: 250,
              backgroundColor: color,
              position: "relative",
            }}
          >
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/shadow.png`}
              style={{ position: "absolute", height: "100%", opacity: 0.29 }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/collar.png`}
              style={{ position: "absolute", height: "100%", opacity: 0.33 }}
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/outerr.png`}
              style={{ position: "absolute", height: "100%" }}
            />
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
      </div>

      <div style={{ marginTop: 20 }}>
        <TwitterPicker
          colors={[
            "#550000",
            "#0CAC68",
            "#FFF040",
            "#0019A3",
            "#A24A79",
            "#9F9F9F",
            "#313131",
            "#349146",
            "#FFFFFF",
            "#005C8D",
          ]}
          onChange={(color) => {
            setColor(color.hex);
          }}
        />
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
          height: 45,
          width: 90,
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
            fontSize: 18,
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
            fontSize: 18,
            position: "absolute",
            marginBottom: 10,
            top: 18,
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
