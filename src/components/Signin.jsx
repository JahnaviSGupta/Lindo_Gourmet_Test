/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { SigninComponent } from "../lib/Bandung";
import Layout from "./Layout";

const errorMessage = "";

export default function Signin() {
  // State to control the visibility of the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Ref to store the popup container element
  const popupRef = useRef(null);

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // Function to handle clicks outside the popup
  const handleOutsideClick = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      closePopup();
    }
  };

  // Add event listener when the popup is open
  useEffect(() => {
    if (isPopupOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [handleOutsideClick, isPopupOpen]);

  return (
    <Layout>
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <SigninComponent openPopup={openPopup} />
        </div>
        {/* Render the popup widget conditionally */}
        {isPopupOpen && (
          <div
            className="fixed inset-0 flex justify-center items-center z-40"
            style={{
              backdropFilter: "blur(10px)", // Apply backdrop blur
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Background color with transparency
            }}
          >
            <div
              className="bg-white p-4 rounded shadow-lg scale-in-center z-50"
              ref={popupRef} // Reference to the outermost popup div
              style={{
                animation: "fadeIn 0.3s ease-out", // Apply fade-in animation
              }}
            >
              {/* Popup Widget Here */}
              <div className="lg:flex items-center relative">
                <div className="lg:w-[572px] w-full bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
                  <div className="w-full">
                    <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
                      <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                        Create Account
                      </h1>
                    </div>
                    <form
                      onSubmit={(event) => {
                        this.executeJoin(event);
                      }}
                      method="POST"
                    >
                      <div className="input-area">
                        <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                          <div className="input-com w-full h-full">
                            <label
                              className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                              htmlFor="firstName"
                            >
                              First Name*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="John"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="input-com w-full h-full">
                            <label
                              className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                              htmlFor="lastName"
                            >
                              Last Name*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Doe"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                          <div className="input-com w-full h-full">
                            <label
                              className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                              htmlFor="email"
                            >
                              Email Address*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="john.doe@gmail.com"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="input-com w-full h-full">
                            <label
                              className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                              htmlFor="emailRepeat"
                            >
                              Repeat Email*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                type="email"
                                id="emailRepeat"
                                name="emailRepeat"
                                placeholder="john.doe@gmail.com"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                          <div className="input-com w-full h-full">
                            <label
                              className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                              htmlFor="password"
                            >
                              Password*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                type="password"
                                id="password"
                                name="password"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                              />
                            </div>
                          </div>
                          <div className="input-com w-full h-full">
                            <label
                              className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal"
                              htmlFor="passwordRepeat"
                            >
                              Repeat Password*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                type="password"
                                id="passwordRepeat"
                                name="passwordRepeat"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="forgot-password-area flex justify-between items-center mb-7">
                          <div className="remember-checkbox flex items-center space-x-2.5">
                            <input
                              type="checkbox"
                              id="remember"
                              name="remember"
                            />
                            <span className="text-base text-black">
                              I agree all{" "}
                              <Link
                                to="/terms"
                                className="text-base text-[#028090] hover:text-cyan-900 cursor-pointer"
                              >
                                terms and conditions
                              </Link>
                            </span>
                          </div>
                        </div>
                        <div className="signin-area mb-3.5">
                          <div className="flex justify-center">
                            <button className="bg-[#028090] hover:bg-cyan-900 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center">
                              <span>Create Account</span>
                            </button>
                          </div>
                        </div>
                        <div className="signup-area flex justify-center">
                          <button
                            className="hover:bg-gray-300 text-sm w-full h-[50px] font-semibold flex justify-center bg-purple items-center"
                            onClick={closePopup}
                          >
                            Or sign into your account
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
                  <div
                    className="absolute xl:-right-20 -right-[138px]"
                    style={{ top: "calc(50% - 258px)" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
