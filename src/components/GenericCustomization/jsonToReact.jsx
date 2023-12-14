import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Select } from "antd";
import React, { useState } from "react";
import TShirt from "./TShirt";
import Theme1 from "./Theme1";
import Theme4 from "./Theme4";

const { Option } = Select;

export default function JsonToReact({ setThemeNumber, themeNumber }) {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [theme1Style, setTheme1Style] = useState({});
  const [theme4Style, setTheme4Style] = useState({});

  const menu = (
    <Menu>
      <Menu.Item onClick={() => setSelectedTheme(1)}>Theme 1</Menu.Item>
      <Menu.Item onClick={() => setSelectedTheme(4)}>Theme 4</Menu.Item>
    </Menu>
  );

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            boxShadow: "1px 1px 2px rgba(0,0,0,0.4)",
            borderRadius: 10,
            background: "white",
            padding: 20,
            margin: 10,
          }}
        >
          <TShirt
            themeNumber={selectedTheme}
            theme1Style={theme1Style}
            setTheme1Style={setTheme1Style}
            theme4Style={theme4Style}
            setTheme4Style={setTheme4Style}
          />
        </div>
        <div style={{ margin: 10, width: 400, marginTop: 30 }}>
          <div style={{ fontWeight: 600, color: "blue" }}>
            Select Theme
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                style={{ background: "white", padding: 10, marginLeft: 15 }}
              >
                {selectedTheme !== 0
                  ? `Theme ${selectedTheme}`
                  : "Select Theme"}{" "}
                <DownOutlined />
              </a>
            </Dropdown>
          </div>
          <hr color="black" style={{ marginTop: 20 }} />
          {selectedTheme === 1 && (
            <Theme1 customStyle={theme1Style} setStyle={setTheme1Style} />
          )}
          {selectedTheme === 4 && (
            <Theme4 customStyle={theme4Style} setStyle={setTheme4Style} />
          )}
          {selectedTheme !== 0 && (
            <div>
              <div>
                <p>Quantity</p>
                <Select defaultValue="1" style={{ marginBottom: "6px" }}>
                  <Option value="XS">1</Option>
                  <Option value="S">2</Option>
                  <Option value="M">3</Option>
                  <Option value="L">4</Option>
                  <Option value="XL">10+</Option>
                </Select>
              </div>
              <Button
                type="default"
                style={{
                  background: "green",
                  border: "1px solid green",
                  color: "white",
                  fontWeight: 400,
                }}
              >
                Add to Cart
              </Button>
              <Button
                type="default"
                style={{
                  background: "green",
                  border: "1px solid green",
                  color: "white",
                  fontWeight: 400,
                  marginInline: "8px",
                }}
              >
                Buy Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
