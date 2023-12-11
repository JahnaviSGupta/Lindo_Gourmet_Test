import { Link } from "react-router-dom";
import { AccountMenuComponent, SigninAndOutComponent } from "../../lib/Bandung";
import Cart from "../Cart";
import ThinBag from "../Helpers/icons/ThinBag";

export default function Navbar({ className }) {
  return (
    <div
      className={`nav-widget-wrapper w-full bg-qteal h-[60px] relative z-30  ${
        className || ""
      }`}
    >
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full d-flex flex-row-reverse justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li>
                    <Link to="/product">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        Products
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        Profile
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard">
                      <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  <li>
                    <SigninAndOutComponent color="white" weight="600" />
                  </li>
                  <li>
                    <div className="flex space-x-6 items-center">
                      {true && (
                        <div className="cart-wrapper group relative">
                          <div className="cart relative cursor-pointer">
                            <Link to="/cart">
                              <span>
                                <ThinBag />
                              </span>
                            </Link>
                            <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
                              5
                            </span>
                          </div>
                          {/* <div className="fixed left-0 top-0 w-full h-full z-40"></div> */}
                          {/* hidden group-hover:block" */}
                          <Cart className="absolute -right-[45px] top-11 z-50 hidden group-hover:block" />
                        </div>
                      )}
                    </div>
                  </li>
                  {/* <li className="relative">
                    <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                        <Link to="/event">
                          <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                            Events
                          </span>
                        </Link>
                      <span className="ml-1.5 ">&#9660;</span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link to="/event">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      Upcoming events
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/event?previous=true">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      Previous events
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                  {/* <li className="relative">
                    <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                      <span>Conversations</span>
                      <span className="ml-1.5 ">&#9660;</span>
                    </span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link to="/conversation">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      List
                                    </span>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/start">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      Start
                                    </span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                  {/* <li>
                    <span className="flex items-center text-sm text-white font-600 cursor-pointer ">
                      Topics
                      <span className="ml-1.5 ">&#9660;</span>
                    </span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div
                        className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center "
                        style={{
                          minHeight: "295px",
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                ABC
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      123
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      456
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      789
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                DEF
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      123
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      456
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      789
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">
                                GHI
                              </h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      123
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      456
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="/all-products">
                                    <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow">
                                      789
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnil w-[348px] h-full">
                          <div className="w-full h-[235px]">
                            <img
                              width=""
                              src={`${process.env.PUBLIC_URL}/assets/images/mega-menu-thumb.jpg`}
                              alt=""
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
            <AccountMenuComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
