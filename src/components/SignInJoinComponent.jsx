import Layout from "./Layout";
import SigninComponent from "./SigninComponent";

function SignInJoinComponent() {
  return (
    <Layout>
      <div className="login-page-wrapper w-full py-10">
        <div className="container-x mx-auto">
          <SigninComponent />
        </div>
      </div>
    </Layout>
  );
}

export default SignInJoinComponent;
