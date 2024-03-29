/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable max-classes-per-file */
import Axios from "axios";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React from "react";
import { IconContext } from "react-icons";
import { FaTwitterSquare } from "react-icons/fa";
import {
  FaAngleRight,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareTwitter,
} from "react-icons/fa6";
import { ImGoogle2 } from "react-icons/im";
import { Link } from "react-router-dom";
import SignInImage from "../components/Helpers/SignInImage";
import JoinComponent from "../components/JoinComponent";
import SigninComponent from "../components/SigninComponent";

let prefix = null;
function getPrefix() {
  return prefix || "";
}
function setPrefix(newprefix) {
  prefix = newprefix;
}

let session = JSON.parse(localStorage.getItem("bandung"));
let sessionErrorMessage = null;
function getSession() {
  return session;
}
function getSessionErrorMessage() {
  return sessionErrorMessage;
}
// TODO: THIS WAS DEFINED BUT NEVER USED
// function getSessionUserEntityId() {
// 	return getSession() ? getSession().userEntityId : '';
// }
function setSession(newsession) {
  session = newsession;
  localStorage.setItem("bandung", JSON.stringify(session));
}
function clearSession() {
  setSession(null);
}
function validSession() {
  return session && session.passcode;
}
function getSessionToken() {
  return session ? session.sessionToken : "";
}
function adminPermission() {
  return getSession() && getSession().administrator;
}
function editorPermission() {
  return getSession() && getSession().editor;
}
function managerPermission() {
  return getSession() && getSession().manager;
}
function signin(email, password) {
  Axios.get(
    `${getPrefix()}/app/session/signin?sessionEmail=${email}&sessionPassword=${password}`,
    null
  )
    .then((response) => {
      if (response.data.error) sessionErrorMessage = response.data.error;
      else {
        setSession(response.data);
        window.location.reload();
      }
    })
    .catch((err) => {
      console.log(err);
      sessionErrorMessage = "Signin failure.";
    })
    .finally((status) => {
      // Do something here with status
      console.log(status);
    });
}
function signout() {
  clearSession();
  window.location.reload();
}
function fetchSession(email, password) {
  // Do something with email and password
  console.log(email, password);
  Axios.get(
    `${getPrefix()}/app/session/view?sessionToken=${getSessionToken()}`,
    null
  )
    .then((response) => {
      if (response.data.error) sessionErrorMessage = response.data.error;
      else {
        setSession(response.data);
      }
    })
    .catch((err) => {
      console.log(err);
    })
    .finally((status) => {
      // Do something here with status
      console.log(status);
    });
}

// If token fails try email/passcode combination from last successful signin
class BandungComponent extends React.Component {
  // TODO: THIS WAS USED BEFORE DEFINED
  // command(command) {
  // 	this.setState({ command });
  // }

  static executeSignin(event) {
    event.preventDefault();
    signin(
      document.getElementById("email").value,
      document.getElementById("password").value
    );
  }

  static executeSignout() {
    signout();
  }


  static executeSignup(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordRepeat = document.getElementById("passwordRepeat").value;
    Axios.get(
      `${getPrefix()}/app/session/join?email=${email}&password=${password}&passwordRepeat=${passwordRepeat}`,
      null
    )
      .then((response) => {
        if (response.data.error) sessionErrorMessage = response.data.error;
        else setSession(response.data);
      })
      .catch((err) => {
        console.log(err);
        sessionErrorMessage = "Signin failure.";
      })
      .finally((status) => {
        window.location.reload();
        // TODO: status is defined but not used
        console.log(status);
      });
  }

  constructor(props) {
    super(props);
    this.id = props.id;
    this.page = 0;

    // TODO: THESE STATE COMMANDS ARE CAUSEING A UNUSED STATE ERROR COMMENTED OUT FOR NOW
    // this.state = {
    // 	command: this.props.command ? this.props.command : 'List',
    // 	commandList: this.props.commandList ? this.props.commandList : 'List',
    // 	errorMessage: null,
    // 	loading: false,
    // };
  }

  adminRenderSignin() {
    return (
      <div className="lg:flex items-center relative">
        <div className="lg:w-[572px] w-full bg-white flex flex-col justify-center sm:p-10 p-5">
          <div className="w-full">
            <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
              <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                Administrative Sign in
              </h1>
            </div>
            <form
              onSubmit={(event) => {
                this.executeSignin(event);
              }}
              method="POST"
            >
              <div className="input-area">
                {getSessionErrorMessage() && (
                  <div className="error_message">
                    {getSessionErrorMessage()}
                  </div>
                )}
                <div className="input-item mb-5">
                  <div className="input-com w-full h-full">
                    <label
                      className="input-label capitalize block mb-2 text-black text-[13px] font-bold"
                      htmlFor="email"
                    >
                      Email Address*
                    </label>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-slate-200 rounded-lg focus:ring-0 focus:outline-none focus:border-black font-semibold border-2 border-transparent focus:border-black focus:ring focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-item mb-5">
                  <div className="input-com w-full h-full">
                    <label
                      className="input-label capitalize block mb-2 text-black text-[13px] font-bold"
                      htmlFor="password"
                    >
                      Password*
                    </label>
                    <div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-slate-200 rounded-lg focus:ring-0 focus:outline-none focus:border-black font-semibold border-2 border-transparent focus:border-black focus:ring focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-item mb-5">
                  <div className="input-com w-full h-full">
                    <label
                      className="input-label capitalize block mb-2 text-black text-[13px] font-bold"
                      htmlFor="password"
                    >
                      ID*
                    </label>
                    <div>
                      <input
                        type="password"
                        id="idnumber"
                        name="idnumber"
                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-slate-200 rounded-lg focus:ring-0 focus:outline-none focus:border-black font-semibold border-2 border-transparent focus:border-black focus:ring focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </div>
                <div className="forgot-password-area flex justify-between items-center mb-7">
                  <div className="remember-checkbox flex items-center space-x-2.5">
                    <input type="checkbox" id="remember" name="remember" />
                    <span className="text-base text-black">Remember Me</span>
                  </div>
                  <Link to="/resetpassword" className="text-base text-black">
                    Forgot Password?
                  </Link>
                </div>
                <div className="signin-area mb-3.5">
                  <div className="flex justify-center">
                    <button className="bg-[#028090] hover:bg-cyan-900 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center">
                      <span>Sign In</span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center py-3">
                  <div className="flex-grow border-t border-gray-300 w-full"></div>
                  <div className="mx-4 text-gray-500">or</div>
                  <div className="flex-grow border-t border-gray-300 w-full"></div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="flex items-center justify-center bg-white p-2 rounded-md shadow mx-2"
                    // onClick={handleGoogleLogin}
                  >
                    <IconContext.Provider
                      value={{ color: "#028090", size: "36px" }}
                    >
                      <div>
                        <ImGoogle2 />
                      </div>
                    </IconContext.Provider>
                  </button>
                  <button
                    className="flex items-center justify-center bg-white p-2 rounded-md shadow mx-2"
                    // onClick={handleTwitterLogin}
                  >
                    <IconContext.Provider
                      value={{ color: "#028090", size: "40px" }}
                    >
                      <div>
                        <FaTwitterSquare />
                      </div>
                    </IconContext.Provider>
                  </button>
                  <button
                    className="flex items-center justify-center bg-white p-2 rounded-md shadow mx-2"
                    // onClick={handleLinkedInLogin}
                  >
                    <IconContext.Provider
                      value={{ color: "#028090", size: "40px" }}
                    >
                      <div>
                        <FaLinkedin />
                      </div>
                    </IconContext.Provider>
                  </button>
                </div>
                {/* <div className="signup-area flex justify-center">
                  <p className="text-base text-qgraytwo font-normal">
                    <Link to="/join" className="text-base text-qyellow">
                      Or create an account
                    </Link>
                  </p>
                </div> */}
              </div>
            </form>
          </div>
        </div>
        <SignInImage />
      </div>
    );
  }

  renderSignup() {
    return (
      <form
        onSubmit={(event) => {
          this.executeSignup(event);
        }}
        method="POST"
      >
        <div className="flex flex-col">
          {getSessionErrorMessage() && (
            <div className="error_message">{getSessionErrorMessage()}</div>
          )}
          <h1 className="text-[48px] font-bold my-[30px] text-left justify-start">
            LindoGourmet
          </h1>

          <label className="mx-1 font-bold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" example@gmail.com"
            className="bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-1 mb-3 max-w-[100%] border-black"
          />
          <label className="mx-1 font-bold">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-1 mb-3 max-w-[100%] border-black"
          />
          <label className="mx-1 font-bold">Repeat Password</label>
          <input
            type="password"
            id="passwordRepeat"
            name="passwordRepeat"
            className="bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-1 mb-3 max-w-[100%] border-black"
          />
          <span className="text-base text-black text-[10px] mx-1 w-[95%]">
            By signing up, I agree to the{" "}
            <Link to="/terms" className="text-base text-qteal text-[10px]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-base text-qteal text-[10px]">
              Privacy Policy
            </Link>
            .
          </span>
          <div className="flex items-center mt-[70px] max-w-[95%]">
            <div className="flex flex-row">
              <div className="flex flex-1 items-center">
                <input
                  name="remember"
                  id="remember"
                  type="checkbox"
                  className="p-2 ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="remember"
                  className="mx-2 my-3 text-sm font-medium text-black"
                >
                  I Agree
                </label>
              </div>
              <div className="flex-1 justify-center">
                <button
                  type="submit"
                  className="items-center float-right justify-end align-right bg-[#028090] rounded-[50px] text-white px-4 py-2 flex flex-wrap"
                >
                  <a>Sign Up &nbsp;</a>
                  <FaAngleRight />
                </button>
              </div>
            </div>

            <div className="flex flex-row mt-[70px] mb-[10px] items-center">
              <div className="flex-1 bg-black h-[2px]" />
              <p className="text-black mx-[10px]">or</p>
              <div className="flex-1 bg-black h-[2px]" />
            </div>

            <div className="flex flex-row items-center justify-center gap-10">
              <FaSquareFacebook className="w-24 h-24 p-4 text-[#028090]" />

              <FaSquareTwitter className="w-24 h-24 p-4 text-[#028090]" />

              <FaLinkedin className="w-24 h-24 p-4 text-[#028090]" />
            </div>
          </div>
        </div>
      </form>
    );
  }

  renderSignin() {
    return (
      <div className="lg:flex items-center relative">
        <div className="lg:w-[572px] w-full bg-white flex flex-col justify-center sm:p-10 p-5">
          <div className="w-full">
            <div className="title-area flex flex-col justify-center items-center relative text-center mb-7">
              <h1 className="text-[34px] font-bold leading-[74px] text-qblack">
                Sign in
              </h1>
            </div>
            <form
              onSubmit={(event) => {
                this.executeSignin(event);
              }}
              method="POST"
            >
              <div className="input-area">
                {getSessionErrorMessage() && (
                  <div className="error_message">
                    {getSessionErrorMessage()}
                  </div>
                )}
                <div className="input-item mb-5">
                  <div className="input-com w-full h-full">
                    <label
                      className="input-label capitalize block mb-2 text-black text-[13px] font-bold"
                      htmlFor="email"
                    >
                      Email Address*
                    </label>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@gmail.com"
                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-slate-200 rounded-lg focus:ring-0 focus:outline-none focus:border-black font-semibold border-2 border-transparent focus:border-black focus:ring focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-item mb-5">
                  <div className="input-com w-full h-full">
                    <label
                      className="input-label capitalize block mb-2 text-black text-[13px] font-bold"
                      htmlFor="password"
                    >
                      Password*
                    </label>
                    <div>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full h-full font-normal bg-slate-200 rounded-lg focus:ring-0 focus:outline-none focus:border-black font-semibold border-2 border-transparent focus:border-black focus:ring focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </div>
                <div className="forgot-password-area flex justify-between items-center mb-7">
                  <div className="remember-checkbox flex items-center space-x-2.5">
                    <input type="checkbox" id="remember" name="remember" />
                    <span className="text-base text-black">Remember Me</span>
                  </div>
                  <Link to="/resetpassword" className="text-base text-black">
                    Forgot Password
                  </Link>
                </div>
                <div className="signin-area mb-3.5">
                  <div className="flex justify-center">
                    <button className="bg-[#028090] hover:bg-cyan-900 text-sm text-white w-full h-[50px] font-semibold flex justify-center bg-purple items-center">
                      <span>Sign In</span>
                    </button>
                  </div>
                </div>
                <div className="signup-area flex justify-center">
                  {/* Instead of navigating to a new page, call openPopup onClick */}
                  <p
                    className="text-base text-[#028090] hover:text-cyan-900 font-normal cursor-pointer"
                    onClick={this.props.openPopup}
                  >
                    Or create an account
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        <SignInImage />
      </div>
    );
  }

}

class AccountMenuComponent extends BandungComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="become-seller-btn">
        <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
          <div className="flex space-x-2 items-center">
            <div className="nav">
              <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                <li className="relative">
                  <span className="flex items-center text-sm text-qwhitetext font-600 cursor-pointer ">
                    <span>
                      <Link to="/">Home</Link>
                    </span>
                    <span className="ml-1.5 ">&#9660;</span>
                  </span>
                  <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                    <div
                      className="w-full bg-white flex justify-between items-center"
                      style={{
                        boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                      }}
                    >
                      <div className="categories-wrapper w-full h-full p-5">
                        <div>
                          <div className="category-items">
                            <ul className="flex flex-col space-y-2">
                              <li>
                                <Link to="/about">
                                  <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                    About
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/contact">
                                  <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                    Contact
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/wishlist">
                                  <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                    Wish List
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link to="/orderhistory">
                                  <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                    Order History
                                  </span>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SigninAndOutComponent extends BandungComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { color, weight } = this.props;

    return !validSession() ? (
      <Link to="/signin">
        <span
          className={`flex items-center text-sm text-${color} font-${weight} cursor-pointer`}
        >
          Sign in/Join
        </span>
      </Link>
    ) : (
      <Link
        to="/dashboard"
        onClick={() => {
          clearSession();
          window.location.reload();
        }}
      >
        <span
          className={`flex items-center text-sm text-${color} font-${weight} cursor-pointer`}
        >
          Sign out
        </span>
      </Link>
    );
  }
}
class ProfileComponent extends BandungComponent {
  constructor(props) {
    super(props);
    this.state = {
      command: null,
      action: null,
      userEntity: {},
      userEmailEntity: {},
      userEmailEntityList: [],
    };
    this.longDescriptionEditorState = EditorState.createEmpty();
  }

  componentDidMount() {
    this.getProfile();
  }

  command(command, action) {
    this.setState({ command, action });
  }

  action(action) {
    this.setState({ action });
  }

  render() {
    if (!validSession()) {
      return (
        <SigninComponent
        />
      );
    }
    return (
      <section className="flex flex-col m-0 p-3">
        <h1 className="font-700 text-3xl sm:text-[50px] mb-2">Profile</h1>
        <hr />
        <div className="hidden sm:block relative mt-[40px] mb-[30px] rounded-[10px] w-[100%] border-[1px] border-[solid]">
          <div className="">
            <div className="flex flex-row mt-[40px] mr-[20px] mb-[40px] ml-[20px]">
              <img
                className="h-[75px] w-[75px] mr-[20px] rounded-[50%]"
                src={`${process.env.PUBLIC_URL}/assets/images/saller-1.png`}
                alt=""
              />
              <div className="flex flex-col">
                <span className="font-700">hac habitasse</span>
                <span className="font-700 text-qgray">hac habitasse</span>
                <span className="font-700 text-qgray">hac habitasse</span>
              </div>
            </div>
            <button
              className="absolute font-700 w-[80px] h-[40px] top-[10px] right-[10px] rounded-[5px] bg-qteal text-white"
              type="button"
            >
              Edit
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <div className="relative flex-[7] mr-[40px] w-[100%] mt-[10px] mb-[30px]">
            {this.renderGeneralTab()}
          </div>
          <div className="relative flex-[5] w-[100%] mt-[10px] mb-[30px]">
            <div className="flex flex-col font-700 text-qgray rounded-[10px] border-[1px] border-[solid] w-full">
              <div className=" m-[15px]">
                <span className="text-qblack">Account Settings</span>
                <form className="flex flex-col mt-[10px]">
                  <label className="form-check-label mb-[20px]">
                    varius morbi enim nunc faucibus
                    <input
                      className="form-check-input ml-[20px] transform scale-150"
                      type="checkbox"
                    />
                  </label>
                  <label className="form-check-label mb-[20px]">
                    varius morbi enim nunc faucibus
                    <input
                      className="form-check-input ml-[20px] transform scale-150"
                      type="checkbox"
                    />
                  </label>
                  <label className="form-check-label mb-[20px]">
                    varius morbi enim nunc faucibus
                    <input
                      className="form-check-input ml-[20px] transform scale-150"
                      type="checkbox"
                    />
                  </label>
                  <label className="form-check-label mb-[20px]">
                    varius morbi enim nunc faucibus
                    <input
                      className="form-check-input ml-[20px] transform scale-150"
                      type="checkbox"
                    />
                  </label>
                  <label className="form-check-label mb-[20px]">
                    varius morbi enim nunc faucibus
                    <input
                      className="form-check-input ml-[20px] transform scale-150"
                      type="checkbox"
                    />
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  getProfile() {
    if (validSession() && getSession().userEntityId) {
      Axios.get(
        `${getPrefix()}/app/user/view?sessionToken=${getSessionToken()}&userEntityId=${
          getSession().userEntityId
        }`,
        null
      ).then((response) => {
        this.setState({ userEntity: response.data });
      });
      Axios.get(
        `${getPrefix()}/app/user/textshortdescription?sessionToken=${getSessionToken()}&userEntityId=${
          getSession().userEntityId
        }`,
        null
      ).then((response) => {
        this.setState({ shortDescription: response.data });
      });
      Axios.get(
        `${getPrefix()}/app/user/textlongdescription?sessionToken=${getSessionToken()}&userEntityId=${
          getSession().userEntityId
        }`,
        null
      ).then((response) => {
        this.setState({ longDescription: response.data });
      });
    }
  }

  
  renderGeneralTab() {
    // fix shortDescription
    if (!this.state.action)
      return (
        <>
          <div className="flex flex-col font-700 text-qgray border-[1px] border-[solid] rounded-[10px]">
            <div className="m-[15px]">
              <span className="mb-[10px] text-qblack">
                Personal Information
              </span>
              <div className="input-item mb-[20px] mt-[10px]">
                <div className="w-full">
                  <div className="input-com flex flex-row">
                    <label className="input-label capitalize block">
                      First Name:
                    </label>
                    <div className="input-wrapper w-[50%] h-[50%] overflow-hidden relative ml-[10px]">
                      {getSession().firstName}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-item mb-[20px]">
                <div className="w-full">
                  <div className="input-com flex flex-row">
                    <label className="input-label capitalize block">
                      Last Name:
                    </label>
                    <div className="input-wrapper w-[50%] h-[50%] overflow-hidden relative ml-[10px]">
                      {getSession().lastName}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-item mb-[20px]">
                <div className="w-full">
                  <div className="input-com flex flex-row">
                    <label className="input-label capitalize block">
                      Email:
                    </label>
                    <div className="input-wrapper w-[50%] h-[50%] overflow-hidden relative ml-[10px]">
                      {getSession().email}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-item mb-[20px]">
                <div className="w-full">
                  <div className="input-com flex flex-row">
                    <label className="input-label capitalize block">
                      Phone Number:
                    </label>
                    <div className="input-wrapper w-[50%] h-[50%] overflow-hidden relative ml-[10px]">
                      {getSession().phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => this.action("update")}
              className="absolute font-700 w-[80px] h-[40px] top-[10px] right-[10px] rounded-[5px] bg-qteal text-white"
              type="button"
            >
              Edit
            </button>
          </div>
         
        </>
      );
    if (this.state.action === "update") {
      this.longDescriptionEditorState = EditorState.createEmpty();
      return (
        <form
          id="generalUpdate"
          onSubmit={(event) => {
            this.executeGeneralUpdate(event);
          }}
          method="POST"
        >
          <div className="flex flex-col font-700 text-qgray border-[1px] border-[solid] rounded-[10px]">
            <div className="m-[15px]">
              <span className="mb-[10px] text-qblack">Personal Inforation</span>
              <div className="input-item mb-[20px] mt-[10px]">
                <div className="w-full">
                  <div className="input-com flex flex-row">
                    <span>First Name*:</span>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      defaultValue={getSession().firstName}
                      className="input-field placeholder:text-sm text-sm mt-1 px-6 text-dark-gray w-[50%] h-[50%] font-normal bg-white focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="input-item mb-[20px]">
                <div className="w-full">
                  <div className="input-com flex flex-row">
                    <span>Last Name*:</span>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      defaultValue={getSession().lastName}
                      className="input-field placeholder:text-sm text-sm mt-1 px-6 text-dark-gray w-[50%] h-[50%] font-normal bg-white focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="input-item mb-[20px]">
                <div className="w-full">
                  <div className="input-com flex flex-row">
                    <span>Email: </span>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      defaultValue={getSession().email}
                      className="input-field placeholder:text-sm text-sm mt-1 px-6 text-dark-gray w-[50%] h-[50%] font-normal bg-white focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="input-item mb-[20px]">
                <div className="w-full">
                  <div className="input-com flex flex-row">
                    <span>Phone Number:</span>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      defaultValue={getSession().phone}
                      className="input-field placeholder:text-sm text-sm mt-1 px-6 text-dark-gray w-[50%] h-[50%] font-normal bg-white focus:ring-0 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="absolute font-700 w-[80px] h-[40px] top-[10px] right-[10px] rounded-[5px] border-[1px] border-[#5cb85c] hover:bg-[#5cb85c] text-[#5cb85c] hover:text-white"
            >
              Save
            </button>
            <button
              onClick={() => this.action(null)}
              type="button"
              className="absolute font-700 w-[80px] h-[40px] top-[60px] right-[10px] rounded-[5px] border-[1px] border-[#d9534f] hover:bg-[#d9534f] text-[#d9534f] hover:text-white"
            >
              Cancel
            </button>
          </div>
          
        </form>
      );
    }
    return null;
  }

  executeGeneralUpdate(event) {
    event.preventDefault();
    const form = new FormData();
    form.append("sessionToken", getSessionToken());
    form.append("userEntityId", this.state.userEntity.userEntityId);
    form.append("firstName", document.getElementById("firstName").value);
    form.append("lastName", document.getElementById("lastName").value);
    form.append(
      "shortDescription",
      document.getElementById("shortDescription").value
    );
    Axios.post(`${getPrefix()}/app/session/update`, form).then((response) => {
      this.getProfile();
      fetchSession();
      // TODO: response is defined but never used
      console.log(response);
    });
    this.action(null);
  }

  renderSettingsTab() {
    // Use Html
    // Notifications
    if (!this.state.action)
      return (
        <div>
          <h1>Profile: Settings</h1>
          <p
            onClick={() => {
              this.command("SettingsUpdate");
            }}
            style={{ cursor: "pointer" }}
          >
            Update
          </p>
        </div>
      );
    if (this.state.action === "update") return null;
    // Use Html
    // Notifications
    return null;
  }

  executeSettingsUpdate(event) {
    event.preventDefault();
    const form = new FormData();
    form.append("sessionToken", getSessionToken());
    form.append("userEntityId", this.state.userEntity.userEntityId);
    Axios.post(`${getPrefix()}/app/user/update`, form).then((response) => {
      this.setState({ command: "Settings" });
      this.getProfile();
      // TODO: response is defined but never used
      console.log(response);
    });
  }

  static renderPasswordTab() {
    return (
      <div className="changePasswordTab w-full">
        <div className="w-full flex xl:flex-row flex-col-reverse space-x-5 xl:items-center">
          <div className="w-[397px] mb-10">
            <div className="input-field mb-6">
              <label
                className="input-label text-qgray text-sm block mb-2.5"
                htmlFor="old_password"
              >
                Old Password*
              </label>
            </div>
            <div className="w-full mt-[30px] flex justify-start">
              <div className="sm:flex sm:space-x-[30px] items-center">
                <div className="w-[180px] h-[50px]">
                  <button type="button" className="yellow-btn">
                    <div className="w-full text-sm font-semibold">
                      Upldate Password
                    </div>
                  </button>
                </div>
                <button type="button">
                  <div className="w-full text-sm font-semibold text-qblack mb-5 sm:mb-0">
                    Cancel
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  static executePasswordUpdate() {}

  static renderContactTab() {
    return null;
  }

  static executeContactUpdate() {}

  renderBioTab() {
    // longDescription
    if (!this.state.command || this.state.command === "Settings")
      return (
        <div>
          <h1>Profile: Settings</h1>
          <p
            onClick={() => {
              this.command("SettingsUpdate");
            }}
            style={{ cursor: "pointer" }}
          >
            Update
          </p>
        </div>
      );
    return null;
    // longDescription
  }

  executeBioUpdate(event) {
    event.preventDefault();
    const form = new FormData();
    form.append("sessionToken", getSessionToken());
    form.append("userEntityId", this.state.userEntity.userEntityId);
    form.append(
      "longDescription",
      draftToHtml(
        convertToRaw(this.longDescriptionEditorState.getCurrentContent())
      )
    );
    Axios.post(`${getPrefix()}/app/user/update`, form).then((response) => {
      this.setState({ command: "Bio" });
      this.getProfile();
      // Do something with the response here
      console.log(response);
    });
  }

  // TODO: THESE CLASS METHODS DON'T DO ANYTHING, COMMENTED OUT
  // renderEmailsTab() {
  // 	return null;
  // }

  // executeEmailUpdate() {}

  // renderSocialsTab() {
  // 	return null;
  // }

  // executeSocials() {}

  // renderImageTab() {
  // 	return null;
  // }

  // executeImage() {}

  // renderQuitTab() {
  // 	return null;
  // }

  // executeQuit() {}
}

class AdminSignInComponent extends BandungComponent {
  render() {
    if (!validSession()) {
      return (
        <SigninComponent/>
      );
      
    }
    if (adminPermission()) {
      return (
        <header className='flex justify-between mt-8 mb-3 px-2'>
						<h1 className='text-3xl font-bold'>Admin</h1>
						<Link to='/stats' className='hidden sm:block'>
							<button type='button' className='btn bg-qteal w-[130px]'>
								<span className='text-white'>Stats</span>
							</button>
						</Link>
					</header>
      );
    }
    else {
      return (
        <div>
          <p>Not Admin. Access denied!</p>
        </div>
      );   
    }

  }
}


class SignupComponent extends BandungComponent {
  render() {
    if (!validSession()) {
      return (
        <JoinComponent/>
      );
    }
    return (
      <div>
        <p>Welcome.</p>
      </div>
    );
  }
}

export {
  AccountMenuComponent, adminPermission, AdminSignInComponent, BandungComponent, clearSession,
  editorPermission,
  getPrefix,
  getSession,
  getSessionErrorMessage,
  getSessionToken,
  JoinComponent,
  managerPermission, ProfileComponent,
  setPrefix,
  setSession,
  signin, SigninAndOutComponent, SigninComponent, signout, SignupComponent, validSession
};

