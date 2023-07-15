import React from 'react'
// import {logo} from "../../docs/assets/images/logo.png"
import {FaSquareFacebook, FaSquareTwitter, FaLinkedin, FaAngleRight} from "react-icons/fa6"
import Layout from "./Layout";

function Admin() {
  return (
    <Layout>
        <div className="login-page-wrapper w-full py-10">
            <div className="container-x mx-auto">
                <div className='flow-root p-12 h-full flex'>
                    <div className='flex flex-col float-left justify-center w-[60%] p-12 pt-10'>
                        <h1 className='text-[48px] font-bold my-4 text-left justify-start'>LindoGourmet</h1>
                        <label className='mx-2 font-bold'>Email</label>
                        <input type='text' className='bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-2 mb-2 max-w-[70%] border-black'/>
                        <label className='mx-2 font-bold'>Password</label>
                        <input type='text' className='bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-2 mb-2 max-w-[70%] border-black' />  
                        <p className='flex flex-col justify-center w-[70%] text-right'><a>Forgot Password?</a></p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="flex flow-root items-center mb-4 max-w-[70%]">
                            <input id="default-checkbox" type="checkbox" value="" className="items-center float-left justify-start ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="default-checkbox" className="items-center float-left justify-start mx-2 text-sm font-medium text-black">Remember Me</label>
                            <button className='items-center float-right justify-end align-right bg-qyellow rounded-lg text-white px-4 py-2 flex flex-wrap'><a>Sign In &nbsp;</a><FaAngleRight /></button>
                        
                            <div className='flex m-12 mt-24 items-center'>
                                <div className="flex-1 bg-black h-[2px]"/>
                                <p className='text-black'>or</p>
                            
                                <div className="flex-1 bg-black h-[2px]"/>
                            </div>
            
                            <div className='flex flex-wrap items-center justify-center gap-10'>
                                <FaSquareFacebook className='w-24 h-24 p-4 bg-qyellow'/>
                                
                                <FaSquareTwitter className='w-24 h-24 p-4 bg-qyellow'/>

                                <FaLinkedin className='w-24 h-24 p-4 bg-qyellow'/>
                            </div>
                        </div>
                    </div>

                    <div className='w-[40%] float-right h-full fit '>
                        <img src='https://helloletsglow.com/wp-content/uploads/2019/04/the-ordinary-hyaluronic-acid-skincare-routine.jpg'></img>
                    </div>
                </div>
            </div>
        </div>
    </Layout>

        
  );
}

export default Admin