import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
import {FaCcVisa} from "react-icons/fa6"
import Layout from '../Layout';


export default function OrderConfimedPage (){
  
  const MapComponent = withGoogleMap(() => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
    />
  ));

  return (
    <Layout>
      <div className='flex flex-row m-[50px] space-x-[170px]'>
          <div className='flex-[6.5]'>
            <div className='flex flex-col border-[1px] w-[100%] rounded-[5px]'>
              <div className='flex-[6]'>
                <MapComponent
                  containerElement={<div className='h-[200px]' />}
                  mapElement={<div className='h-[100%]' />}
                />
              </div>
              <div className='flex-[5] h-[100%] m-[10px] mr-[150px]'>
                <h1 className='font-400 mb-[5px] text-[16px]'>Your order is confirmed</h1>
                <h className='font-300 text-[12px]'>We've accepted your order, and we getting it ready. Come back to this page for updates on your shipment status.</h>
                <div className='mt-[10px] mb-[20px] border-[1px] rounded-[5px]'>
                  <input
                    className="m-[8px] text-[10px] text-qgray w-[98%] focus:outline-none"
                    type="text"
                    id="cardHolderName"
                    value= ""
                    placeholder="Track order with Shop"
                    required
                    />
                </div>
              </div>
            </div>
            <div className='flex-[1] border-[1px] rounded-[5px] w-[80%]'>
                <label class="flex form-check-label font-300 text-[10px] items-center">
                  <input
                    class="form-check-input m-[15px] transform scale-150"
                    type="checkbox"
                  />
                  Save my information for faster checkout
                </label>
              </div>
            
          </div>
        <div className='flex-[5.5] w-[90%] relative'>
          <div className='border-[1px] rounded-[5px] text-[15px]'>
            <h1 className='font-400 m-[10px]'>Customer information</h1>
            <div className='flex flex-row m-[10px] text-[12px]'>
              <div className='flex-[6]'>
                <div className='mb-[20px]'>
                  <h2 className='font-700 mb-[3px]'>Contact information</h2>
                  <p className='font-200'>Johnsmith444@gmail.com</p>
                </div>
                <div className='mb-[20px]'>
                  <h2 className='font-700 mb-[3px]'>Shipping address</h2>
                  <p className='font-200 underline'>John Smith</p>
                  <p className='font-200 underline'>123 Appleseed St.</p>
                  <p className='font-200 underline'>Dallas, TX 1234</p>
                  <p className='font-200 underline'>United States</p>
                </div>
                <div className='mb-[20px]'>
                  <h2 className='font-700 mb-[3px]'>Shipping method</h2>
                  <p className='font-200'>USPS First Class-Shipping</p>
                </div>
              </div>
              <div className='flex-[6]'>
                <div className='mb-[20px]'>
                  <h2 className='font-700 mb-[3px]'>Payment method</h2>
                  <div className='flex nowrap'>
                    <FaCcVisa className='h-[15px] w-[20px] mr-[5px]' />
                    <p className='font-200'>ending with 4444 - $60.00</p>
                  </div>
                </div>
                <div className='mb-[20px]'>
                  <h2 className='font-700 mb-[3px]'>Shipping address</h2>
                  <p className='font-200'>John Smith</p>
                  <p className='font-200'>123 Appleseed St.</p>
                  <p className='font-200'>Dallas, TX 1234</p>
                  <p className='font-200'>United States</p>
                </div>
              </div>
            </div>
          </div>
          <button
                className="absolute font-700 w-[180px] h-[40px] bottom-[10px] right-[0px] rounded-[5px] bg-qyellow text-white text-[15px]"
                type="button"
              >
                Continue Shopping
              </button>
        </div>
      </div>
    </Layout>
  )
};



