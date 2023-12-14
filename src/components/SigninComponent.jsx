import React, { useState } from "react";
import { signinSession } from "../api/session";
import { setSession, validSession } from "../bandung";
import Signin from "./Signin";

const SigninComponent = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignin = async (email, password) => {
    const response = await signinSession(email, password);
    if (response.code === "SUCCESS") {
      setSession(response.data);
      window.location.reload();
    } else {
      setErrorMessage(response.message);
    }
  };

  if (validSession()) {
    return (
      <div>
        <p>Welcome.</p>
      </div>
    );
  }

  return (

    <Signin
      errorMessage={errorMessage}
      onSigninSubmit={handleSignin}
    />
                
    
  );
};

export default SigninComponent;