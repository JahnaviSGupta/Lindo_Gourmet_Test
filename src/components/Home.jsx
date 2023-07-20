import Layout from "./Layout";

import HomePartOneComponent from "./HomeComponent/HomePartOneComponent";
import HomePartTwoComponent from "./HomeComponent/HomePartTwoComponent";
import HomePartThreeComponent from "./HomeComponent/HomePartThreeComponent";
import HomePartFourComponent from "./HomeComponent/HomePartFourComponent";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <div className="homePartOne">
            <HomePartOneComponent />
          </div>

          <div className="homePartTwo">
            <HomePartTwoComponent />
          </div>

          <div className="homePartThree">
            <HomePartThreeComponent />
          </div>

          <div class="homePartFour">
            <HomePartFourComponent />
          </div>
        </div>
      </Layout>
    </>
  );
}
