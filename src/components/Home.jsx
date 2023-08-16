import Layout from "./Layout";

import { useEffect, useState } from "react";
import HomePartOneComponent from "./HomeComponent/HomePartOneComponent";
import HomePartThreeComponent from "./HomeComponent/HomePartThreeComponent";
import HomePartTwoComponent from "./HomeComponent/HomePartTwoComponent";

export default function Home() {
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

  return (
    <>
      <Layout>
        <div className="">
          <div className="m-[70px]">
            <HomePartOneComponent showImage={showImage} />
          </div>

          <div className="m-[70px]">
            <HomePartTwoComponent />
          </div>

          <div className="m-[70px] mb-[0px]">
            <HomePartThreeComponent showImage={showImage} />
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
