import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Signin = ({
  errorMessage,
  onSigninSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSigninSubmit = (event) => {
    event.preventDefault();
    onSigninSubmit(email, password);
  };

  return (
    <div className="lg:flex items-center relative">
      <div
        className="lg:w-[572px] w-full bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
        <div className="w-full">
          <div
            className="title-area flex flex-col justify-center items-center relative text-center mb-7">
            <h1
              className="text-[34px] font-bold leading-[74px] text-qblack">Signin</h1>
          </div>
          <form onSubmit={handleSigninSubmit}
                method="POST">
            <div className="input-area">
              {errorMessage &&
                <div className="error_message">{errorMessage}</div>}
              <div className="input-item mb-5">
                <div className="input-com w-full h-full">
                  <label
                    className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal"
                    htmlFor="email">Email Address*</label>
                  <div
                    className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                    <TextField
                      type="email"
                      id="email"
                      name="email"
                      placeholder="example@gmail.com"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="input-item mb-5">
                <div className="input-com w-full h-full">
                  <label
                    className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal"
                    htmlFor="password">Password*</label>
                  <div
                    className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                    <TextField
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={event => setPassword(event.target.value)}
                      className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div
                className="forgot-password-area flex justify-between items-center mb-7">
                <div
                  className="remember-checkbox flex items-center space-x-2.5">
                  <input type="checkbox" id="remember" name="remember"/>
                  <span className="text-base text-qblack">Remember Me</span>
                </div>
                <Link to="/resetpassword" className="text-base text-qgrotto">Forgot
                  Password</Link>
              </div>
              <div className="signin-area mb-3.5">
                <div className="flex justify-center">
                  <Button
                    className="blues-btn mb-6 text-sm text-black w-full h-[50px] font-semibold flex justify-center bg-purple items-center rounded-full"                   
                    type={"submit"}
                    variant={"outlined"}
                    disabled={!email.length || !password.length}
                    >
                    <span>Sign In</span>
                  </Button>
                </div>
              </div>
              <div className="signup-area flex justify-center">
                <p className="text-base text-qgraytwo font-normal">
                  <Link to="/join" className="text-base text-qgrotto">Or create
                    an account</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;