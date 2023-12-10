import React from "react";
import Join from "./Join";
import Layout from "./Layout";

const JoinComponent = () => {

  return (
    <Layout>
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <Join />
        </div>
      </div>
    </Layout>

  );
};

export default JoinComponent;