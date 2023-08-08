import Layout from "../Layout";
import DashDiagramLine from "./tabs/DashDiagramLine";
import DashDiagramPie from "./tabs/DashDiagramPie";
import DashPartFour from "./tabs/DashPartFour";
import DashPartOne from "./tabs/DashPartOne";
import DashPartThree from "./tabs/DashPartThree";
import DashPartTwo from "./tabs/DashPartTwo";

export default function Dashbaord() {
  return (
    <>
      <Layout>
        <div>
          <div className="DashPartOne">
            <DashPartOne />
          </div>

          <hr />

          <div className="DashDiagram flex justify-content-center my-4">
            <div className="col-lg-5">
              <DashDiagramLine />
            </div>

            <div className="col-lg-5">
              <DashDiagramPie />
            </div>
          </div>

          <hr />

          <div className="DashPartOne">
            <div>Store Settings</div>
          </div>

          <div className="DashPartTwo">
            <DashPartTwo />
          </div>

          <hr />

          <div className="DashPartOne">
            <div>Buy it Again</div>
          </div>

          <div className="DashPartThree">
            <DashPartThree />
          </div>

          <hr />

          <div class="DashPartFour">
            <DashPartFour />
          </div>
        </div>
      </Layout>
    </>
  );
}
