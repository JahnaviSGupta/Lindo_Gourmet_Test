import { AdminSignInComponent } from "../lib/Bandung";
import Layout from "./Layout";
// import {logo} from "../../docs/assets/images/logo.png"

// need update
function Admin() {
  return (
    <Layout>
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <AdminSignInComponent />
        </div>
      </div>
    </Layout>
  );
}

export default Admin;
