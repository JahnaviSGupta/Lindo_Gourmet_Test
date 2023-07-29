import Layout from "./Layout";

import HomePartOneComponent from "./HomeComponent/HomePartOneComponent";
import HomePartTwoComponent from "./HomeComponent/HomePartTwoComponent";
import HomePartThreeComponent from "./HomeComponent/HomePartThreeComponent";
import HomePartFourComponent from "./HomeComponent/HomePartFourComponent";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="">
          <div className="m-[70px]">
            <HomePartOneComponent />
          </div>

          <div className="m-[70px]">
            <HomePartTwoComponent />
          </div>

          <div className="m-[70px] mb-[0px]">
            <HomePartThreeComponent />
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
