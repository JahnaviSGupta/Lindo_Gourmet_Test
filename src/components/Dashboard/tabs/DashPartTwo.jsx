import React from "react";

import { Link } from "react-router-dom";


export default function DashPartTwo() {
  return (
    <section className="w-full max-w-6xl grid grid-cols-4 grid-rows-2 gap-4 justify-items-center mt-5 mb-10">
      <div className="DashPartTwoCard">
        <picture className="w-full flex justify-center">
          <img
            src="assets/images/Dashboard/DashBoard-StoreSettings-Profile.png"
            alt=""
          />
        </picture>
        <div className="p-1">
          <Link to="/Profile" className="text-2xl font-bold">
            Profile
          </Link>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="DashPartTwoCard">
        <picture className="w-full flex justify-center">
          <img
            src="assets/images/Dashboard/DashBoard-StoreSettings-Time.png"
            alt=""
          />
        </picture>
        <div className="p-1">
          <Link to="/Profile" className="text-2xl font-bold">
            Order History
          </Link>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="DashPartTwoCard">
        <picture className="w-full flex justify-center">
          <img
            src="assets/images/Dashboard/DashBoard-StoreSettings-WishList.png"
            alt=""
          />
        </picture>
        <div className="p-1">
          <Link to="/Wishlist" className="text-2xl font-bold">
            Wish List
          </Link>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="DashPartTwoCard">
        <picture className="w-full flex justify-center">
          <img
            src="assets/images/Dashboard/DashBoard-StoreSettings-Payments.png"
            alt=""
          />
        </picture>
        <div className="p-1">
          <Link to="/Payment" className="text-2xl font-bold">
            Payment Methods
          </Link>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="DashPartTwoCard">
        <picture className="w-full flex justify-center">
          <img
            src="assets/images/Dashboard/DashBoard-StoreSettings-SecurityLock.png"
            alt=""
          />
        </picture>
        <div className="p-1">
          <Link to="/loginandsecurity" className="text-2xl font-bold">
            Login And Security
          </Link>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="DashPartTwoCard">
        <picture className="w-full flex justify-center">
          <img
            src="assets/images/Dashboard/DashBoard-StoreSettings-Address.png"
            alt=""
          />
        </picture>
        <div className="p-1">
          <Link to="/Address" className="text-2xl font-bold">
            Your Address
          </Link>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="DashPartTwoCard">
        <picture className="w-full flex justify-center">
          <img
            src="assets/images/Dashboard/DashBoard-StoreSettings-Messages.png"
            alt=""
          />
        </picture>
        <div className="p-1">
          <Link to="/support" className="text-2xl font-bold">
            Your Messages
          </Link>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="DashPartTwoCard">
        <picture className="w-full flex justify-center">
          <img
            src="assets/images/Dashboard/DashBoard-StoreSettings-GiftCard.png"
            alt=""
          />
        </picture>
        <div className="p-1">
          <Link to="/Profile" className="text-2xl font-bold">
            Gift Cards
          </Link>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
