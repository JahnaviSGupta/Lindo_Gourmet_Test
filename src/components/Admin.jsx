import React, { useEffect, useState } from "react";
import { SigninComponent } from "../lib/Bandung";
import Layout from "./Layout";
// import {logo} from "../../docs/assets/images/logo.png"

// need update
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
    if (windowWidth < 800) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  }, [windowWidth]);

  return (
    <Layout>
      <div className="flex flex-row h-full">
        <div className="flex-[6] flex flex-col items-start justify-center items-center">
          <SigninComponent />
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
