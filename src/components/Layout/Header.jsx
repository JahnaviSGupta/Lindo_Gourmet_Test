import { Link } from "react-router-dom";
import Middlebar from "./Middlebar";
import Navbar from "./Navbar";

export default function HeaderOne({ className, drawerAction }) {
  return (
    <header className={` ${className || ""} header-section-wrapper relative`}>
      <Middlebar className="quomodo-shop-middle-bar lg:block hidden" />
      <div className="flex quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
        <div className="flex-[6] w-full h-full flex justify-start items-center px-2">
          <Link to="/profile">
            <img
              className="w-10 h-10 rounded-full"
              src={`${process.env.PUBLIC_URL}/assets/images/dog.jpg`}
              alt="Dog"
            />
          </Link>
        </div>
        <div className="flex-[6] w-full h-full flex justify-end items-center px-2">
          <div onClick={drawerAction}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {/* <div>
            <a href="/">
              <img
                width="152"
                height="36"
                src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
                alt="logo"
              />
            </a>
          </div> */}
          {/* <div className="cart relative cursor-pointer">
            <a href="/cart">
              <span>
                <ThinBag />
              </span>
            </a>
            <span className="w-[18px] h-[18px] rounded-full bg-qyellow absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px]">
              15
            </span>
          </div> */}
        </div>
      </div>
      <Navbar className="quomodo-shop-nav-bar lg:block hidden" />
    </header>
  );
}
