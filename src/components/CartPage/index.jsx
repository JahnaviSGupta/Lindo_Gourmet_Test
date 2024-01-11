import { Provider } from "react-redux";
import store from "../../lib/Store";
import Breadcrumbs from "../Breadcrumbs";
import EmptyCardError from "../EmptyCardError";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Layout";
import ProductsTable from "./ProductsTable";

export default function CardPage({ cart = true }) {
  return (
    <Layout childrenClasses={cart ? "pt-0 pb-0" : ""}>
      {cart === false ? (
        <div className="cart-page-wrapper w-full">
          <div className="container-x mx-auto">
            <Breadcrumbs
              paths={[
                { name: "home", path: "/" },
                { name: "cart", path: "/cart" },
              ]}
            />
            <EmptyCardError />
          </div>
        </div>
      ) : (
        <div className="cart-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full">
            <PageTitle
              title="Your Cart"
              breadcrumb={[
                { name: "home", path: "/" },
                { name: "cart", path: "/cart" },
              ]}
            />
          </div>
          <div className="w-full mt-[23px]">
            <div className="container-x mx-auto">
              <Provider store={store}>
                <ProductsTable className="mb-[30px]" />
              </Provider>
              <div className="w-full sm:flex justify-between">
                <div className="discount-code sm:w-[270px] w-full mb-5 sm:mb-0 h-[50px] flex">
                  <div className="flex-1 h-full">
                    <InputCom type="text" placeholder="Discount Code" />
                  </div>
                  <button type="button" className="w-[90px] h-[50px] black-btn">
                    <span className="text-sm font-semibold">Apply</span>
                  </button>
                </div>
                <div className="flex space-x-2.5 items-center">
                  <a href="/product">
                    <div className="btn bg-qteal rounded-lg text-white px-5 py-2 font-600 flex justify-center items-center">
                      <span className="text-sm font-semibold">
                        Continue Shopping
                      </span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="btn bg-qteal rounded-lg text-white px-5 py-2 font-600 flex justify-center items-center">
                      <span className="text-sm font-semibold">Update Cart</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full mt-[30px] flex gap-2">
                <div className="flex-[7] sm:w-full w-full border border-[#EDEDED] px-[30px] py-[26px] ml-auto">
                  <div className="mb-6">
                    <div className=" flex justify-between mb-6">
                      <p className="text-[25px] font-medium text-qblack">
                        Credential Details
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                      Name On Card<span className="text-red-500">*</span>
                    </span>
                    <div className="w-full h-[50px]">
                      <InputCom
                        inputClasses="w-full h-full"
                        type="text"
                        placeholder="Name here"
                      />
                    </div>
                  </div>
                  <div className="flex mb-6 gap-3">
                    <div className="flex-1">
                      <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                        Expiration Date<span className="text-red-500">*</span>
                      </span>
                      <div className="w-full h-[50px]">
                        <InputCom
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="**/**"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                        Security Code<span className="text-red-500">*</span>
                      </span>
                      <div className="w-full h-[50px]">
                        <InputCom
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="***"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                      Card Number<span className="text-red-500">*</span>
                    </span>
                    <div className="w-full h-[50px]">
                      <InputCom
                        inputClasses="w-full h-full"
                        type="text"
                        placeholder="****-****-****-****"
                      />
                    </div>
                  </div>
                  <div className="flex mb-6 gap-3">
                    <div className="flex-1">
                      <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                        Email Address<span className="text-red-500">*</span>
                      </span>
                      <div className="w-full h-[50px]">
                        <InputCom
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="demoemail@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                        Phone Number<span className="text-red-500">*</span>
                      </span>
                      <div className="w-full h-[50px]">
                        <InputCom
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="012 3 *******"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6">
                    <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                      Country<span className="text-red-500">*</span>
                    </span>
                    <select className="w-full h-[50px] border text-[12px] font-medium text-qgraytwo pl-[20px]">
                      <option value="" disabled selected hidden>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="mb-6">
                    <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                      Address<span className="text-red-500">*</span>
                    </span>
                    <div className="w-full h-[50px]">
                      <InputCom
                        inputClasses="w-full h-full"
                        type="text"
                        placeholder="Select Country"
                      />
                    </div>
                  </div>
                  <div className="flex mb-6 gap-3">
                    <div className="flex-1">
                      <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                        City<span className="text-red-500">*</span>
                      </span>
                      <select className="w-full h-[50px] border text-[12px] font-medium text-qgraytwo pl-[20px]">
                        <option value="" disabled selected hidden>
                          Select City
                        </option>
                      </select>
                    </div>
                    <div className="flex-1">
                      <span className="text-[12px] font-medium text-qgraytwo mb-[8px] block">
                        Postcode / ZIP<span className="text-red-500">*</span>
                      </span>
                      <div className="w-full h-[50px]">
                        <InputCom
                          inputClasses="w-full h-full"
                          type="text"
                          placeholder="12345"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[5] sm:w-[370px] w-full px-[30px] py-[26px] ml-auto">
                  <div className="sub-total mb-6">
                    <div className=" flex justify-between mb-6">
                      <p className="text-[15px] font-medium text-qblack">
                        Subtotal
                      </p>
                      <p className="text-[15px] font-medium text-qred">$365</p>
                    </div>
                    <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                  </div>
                  <div className="shipping mb-6">
                    <span className="text-[15px] font-medium text-qblack mb-[18px] block">
                      Shipping
                    </span>
                    <ul className="flex flex-col space-y-1">
                      <li>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2.5 items-center">
                            <div className="input-radio">
                              <input
                                type="radio"
                                name="price"
                                className="accent-pink-500"
                              />
                            </div>
                            <span className="text-[13px] text-normal text-qgraytwo">
                              Free Shipping
                            </span>
                          </div>
                          <span className="text-[13px] text-normal text-qgraytwo">
                            +$00.00
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2.5 items-center">
                            <div className="input-radio">
                              <input
                                type="radio"
                                name="price"
                                className="accent-pink-500"
                              />
                            </div>
                            <span className="text-[13px] text-normal text-qgraytwo">
                              Flat Rate
                            </span>
                          </div>
                          <span className="text-[13px] text-normal text-qgraytwo">
                            +$00.00
                          </span>
                        </div>
                      </li>
                      <li>
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2.5 items-center">
                            <div className="input-radio">
                              <input
                                type="radio"
                                name="price"
                                className="accent-pink-500"
                              />
                            </div>
                            <span className="text-[13px] text-normal text-qgraytwo">
                              Local Delivery
                            </span>
                          </div>
                          <span className="text-[13px] text-normal text-qgraytwo">
                            +$00.00
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="shipping-calculation w-full mb-3">
                    <div className="title mb-[17px]">
                      <h1 className="text-[15px] font-medium">
                        Calculate Shipping
                      </h1>
                    </div>
                    <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                      <span className="text-[13px] text-qgraytwo">
                        Select Country
                      </span>
                      <span>
                        <svg
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                            fill="#222222"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="w-full h-[50px]">
                      <InputCom
                        inputClasses="w-full h-full"
                        type="text"
                        placeholder="Postcode / ZIP"
                      />
                    </div>
                  </div> */}
                  <button type="button" className="w-full mb-10">
                    <div className="w-full h-[50px] bg-[#028090] flex justify-center items-center">
                      <span className="text-sm font-semibold">Update Cart</span>
                    </div>
                  </button>
                  <div className="total mb-6">
                    <div className=" flex justify-between">
                      <p className="text-[18px] font-medium text-qblack">
                        Total
                      </p>
                      <p className="text-[18px] font-medium">$365</p>
                    </div>
                  </div>
                  <a href="/checkout">
                    <div className="w-full h-[50px] bg-[#028090] flex justify-center items-center">
                      <span className="text-sm font-semibold">
                        Proceed to Checkout
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
