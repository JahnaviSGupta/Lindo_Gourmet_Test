import React, { useEffect, useState } from "react";
import Layout from "./Layout";
// import {logo} from "../../docs/assets/images/logo.png"
import {
  FaAngleRight,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";

function Admin() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showImage, setShowImage] = useState(true);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 600) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  }, [windowWidth]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    checked: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? !prevFormData.checked : [value],
    }));
  }

  function handleSubmit(e) {
    e.stopImmediatePropagation();
    // code for pop up component should go here
  }

  return (
    <Layout>
      <div className="flex flex-row h-full">
        <div className="flex-[6] flex flex-col items-start justify-center items-center">
          <form>
            <div className="flex flex-col">
              <h1 className="text-[48px] font-bold my-[30px] text-left justify-start">
                LindoGourmet
              </h1>

              <label className="mx-1 font-bold">Email</label>
              <input
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="text"
                className="bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-1 mb-3 max-w-[100%] border-black"
              />
              <label className="mx-1 font-bold">Password</label>
              <input
                onChange={handleChange}
                name="password"
                value={formData.password}
                type="text"
                className="bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-1 mb-3 max-w-[100%] border-black"
              />

              <p className="flex flex-col justify-center w-[95%] text-right">
                <a>Forgot Password?</a>
              </p>
              <br></br>
              <br></br>
              <br></br>
              <div class="flex flow-root items-center mb-4 max-w-[95%]">
                <input
                  onChange={handleChange}
                  name="checked"
                  id="default-checkbox"
                  type="checkbox"
                  value={formData.checked}
                  class="items-center float-left justify-start ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="items-center float-left justify-start mx-2 text-sm font-medium text-black"
                >
                  Remember Me
                </label>
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="items-center float-right justify-end align-right bg-[#028090] rounded-lg text-white px-4 py-2 flex flex-wrap"
                >
                  <a>Sign In &nbsp;</a>
                  <FaAngleRight />
                </button>

                <div className="flex flex-row mt-[70px] mb-[10px] items-center">
                  <div className="flex-1 bg-black h-[2px]" />
                  <p className="text-black mx-[10px]">or</p>
                  <div className="flex-1 bg-black h-[2px]" />
                </div>

                <div className="flex flex-row items-center justify-center gap-10">
                  <FaSquareFacebook
                    className="w-24 h-24 p-4"
                    style={{ color: "#028090" }}
                  />

                  <FaSquareTwitter
                    className="w-24 h-24 p-4"
                    style={{ color: "#028090" }}
                  />

                  <FaLinkedin
                    className="w-24 h-24 p-4"
                    style={{ color: "#028090" }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {showImage && (
          <div className="flex-[6]">
            <div className="">
              <img src="https://helloletsglow.com/wp-content/uploads/2019/04/the-ordinary-hyaluronic-acid-skincare-routine.jpg"></img>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Admin;
