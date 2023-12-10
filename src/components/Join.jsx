import { Button, FormControlLabel, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { joinSession } from "../api/session";
import { setSession } from "../bandung";
import useTextField from "../hooks/useTextField";

const Join = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [
    email,
    setEmail,
    emailError,
    setEmailError,
    emailHelperText,
    setEmailHelperText,
  ] = useTextField();
  const [
    emailRepeat,
    setEmailRepeat,
    emailRepeatError,
    setEmailRepeatError,
    emailRepeatHelperText,
    setEmailRepeatHelperText,
  ] = useTextField();
  const [
    password,
    setPassword,
    passwordError,
    setPasswordError,
    passwordHelperText,
    setPasswordHelperText,
  ] = useTextField();
  const [
    passwordRepeat,
    setPasswordRepeat,
    passwordRepeatError,
    setPasswordRepeatError,
    passwordRepeatHelperText,
    setPasswordRepeatHelperText,
  ] = useTextField();
  const [termsChecked, setTermsChecked] = useState(false);
  const [displayedMessage, setDisplayedMessage] = useState("");

  const handleJoinSubmit = async (event) => {
    event.preventDefault();
    const response = await joinSession(
      firstName,
      lastName,
      email,
      emailRepeat,
      password,
      passwordRepeat,
    );

    if (response.code === "EMAIL_MISMATCH") {
      setEmailHelperText(response.message);
      setEmailError(true);
      setEmailRepeatError(true);
    } else if (response.code === "PASSWORD_MISMATCH") {
      setPasswordHelperText(response.message);
      setPasswordError(true);
      setPasswordRepeatError(true);
    } else if (response.code === "ERROR") {
      setDisplayedMessage(response.message);
    } else {
      setSession(response.data);
      window.location.reload();
    }
  };

  const resetErrors = () => {
    setEmailError(false);
    setEmailHelperText("");
    setEmailRepeatError(false);
    setEmailRepeatHelperText("");
    setPasswordError(false);
    setPasswordHelperText("");
    setPasswordRepeatError(false);
    setPasswordRepeatHelperText("");
    setDisplayedMessage("");
  };

  const handleInputChange = (event, setter) => {
    setter(event.target.value);
    resetErrors();
  };

  const createAccountEnabled = firstName && lastName && email && emailRepeat &&
    password && passwordRepeat && termsChecked;

  return (
    <div className="lg:flex items-center relative">
      <div
        className="lg:w-[572px] w-full bg-white flex flex-col justify-center sm:p-10 p-5 border border-[#E0E0E0]">
        <div className="w-full">
          <div
            className="title-area flex flex-col justify-center items-center relative text-center mb-7">
            <h1
              className="text-[34px] font-bold leading-[74px] text-qblack">Create
              Account</h1>
          </div>
          <form onSubmit={handleJoinSubmit} method="POST">
            <div className="input-area">
              <div
                className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                <div className="input-com w-full h-full">
                  <TextField
                    type="text"
                    id="firstName"
                    name="firstName"
                    label={"First Name"}
                    required={true}
                    value={firstName}
                    onChange={(event) => handleInputChange(event, setFirstName)}
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="input-com w-full h-full">
                  <TextField
                    type="text"
                    id="lastName"
                    name="lastName"
                    label={"Last Name"}
                    required={true}
                    value={lastName}
                    onChange={(event) => handleInputChange(event, setLastName)}
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div
                className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                <div className="input-com w-full h-full">
                  <TextField
                    type="email"
                    id="email"
                    name="email"
                    label={"Email Address"}
                    error={emailError}
                    helperText={emailHelperText}
                    required={true}
                    value={email}
                    onChange={(event) => handleInputChange(event, setEmail)}
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="input-com w-full h-full">
                  <TextField
                    type="email"
                    id="emailRepeat"
                    name="emailRepeat"
                    label={"Repeat Email"}
                    error={emailRepeatError}
                    helperText={emailRepeatHelperText}
                    required={true}
                    value={emailRepeat}
                    onChange={(event) => handleInputChange(event,
                      setEmailRepeat)}
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div
                className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                <div className="input-com w-full h-full">
                  <TextField
                    type="password"
                    id="password"
                    name="password"
                    label={"Password"}
                    error={passwordError}
                    helperText={passwordHelperText}
                    required={true}
                    value={password}
                    onChange={(event) => handleInputChange(event, setPassword)}
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                  />
                </div>
                <div className="input-com w-full h-full">
                  <TextField
                    type="password"
                    id="passwordRepeat"
                    name="passwordRepeat"
                    label={"Repeat Password"}
                    error={passwordRepeatError}
                    helperText={passwordRepeatHelperText}
                    required={true}
                    value={passwordRepeat}
                    onChange={(event) => handleInputChange(event,
                      setPasswordRepeat)}
                    className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                  />
                </div>
              </div>
              <div
                className="forgot-password-area flex justify-between items-center mb-7">
                <div
                  className="remember-checkbox flex items-center space-x-2.5">
                  <FormControlLabel
                    control={
                      <Checkbox
                        id="remember"
                        name="remember"
                        required
                        checked={termsChecked}
                        onChange={() => setTermsChecked(!termsChecked)}
                      />
                    }
                    label={
                      <span className="text-base text-black">
                        I agree to all&nbsp;
                        <Link
                          to="/terms"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base text-qgrotto"
                        >
                          terms and conditions
                        </Link>
                      </span>
                    }
                  />
                </div>
              </div>
              <div className="signin-area mb-3.5">
                {displayedMessage &&
                  <Typography>{displayedMessage}</Typography>}
                <div className="flex justify-center">
                  <Button
                    type={"submit"}
                    variant={"outlined"}
                    disabled={!createAccountEnabled}
                    className="blues-btn mb-6 text-sm text-black w-full h-[50px] font-semibold flex justify-center bg-purple items-center rounded-full">
                    <span>Create Account</span>
                  </Button>
                </div>
              </div>
              <div className="signup-area flex justify-center">
                <Button className="text-base text-qgraytwo font-normal"><Link
                  to="/signin"
                  className="text-base text-qgrotto">Or
                  sign into your account</Link></Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div
        className="flex-1 lg:flex hidden transform scale-60 xl:scale-100   xl:justify-center">
        <div className="absolute xl:-right-20 -right-[138px]"
             style={{ top: "calc(50% - 258px)" }}></div>
      </div>
    </div>
  );
};

export default Join;