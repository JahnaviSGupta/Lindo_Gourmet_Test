import { useEffect, useState } from "react";
import "../lib/emailForm.css";
import Layout from "./Layout";

import EmailFormComponent from "./HomeComponent/EmailFormComponent";
import HomePartFourComponent from "./HomeComponent/HomePartFourComponent";
import HomePartOneComponent from "./HomeComponent/HomePartOneComponent";
import HomePartThreeComponent from "./HomeComponent/HomePartThreeComponent";

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showImage, setShowImage] = useState(true);
  const [showEmailForm, setShowEmailForm] = useState(true);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleEmailFormSubmit = () => {
    console.log("Test Pass");
    setShowEmailForm(false);
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

  return (
    <>
      <Layout>
        {/* <div className="px-[20px]"> */}

        {showEmailForm && (
          <div className="email-form-overlay">
            <EmailFormComponent onSubmit={handleEmailFormSubmit} />
          </div>
        )}

        {/* <div className="md:px-[100px]"> */}
        <div>
          <div>
            <HomePartOneComponent showImage={showImage} />
          </div>

          {/* <div className="m-[70px]">
            <HomePartTwoComponent />
          </div> */}

          <div className="m-[70px] mb-[0px]">
            <HomePartThreeComponent showImage={showImage} />
          </div>
          <div className="m-[50px]">
            <HomePartFourComponent></HomePartFourComponent>
          </div>
          {/* 
          <div className="m-[70px]">
            <HomePartFourComponent />
          </div> */}
        </div>
      </Layout>
    </>
  );
}
