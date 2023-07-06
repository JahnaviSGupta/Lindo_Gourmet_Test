import React from 'react'
// import {logo} from "../../docs/assets/images/logo.png"
import {FaSquareFacebook, FaSquareTwitter, FaLinkedin, FaAngleRight} from "react-icons/fa6"


function Admin() {
  return (
    <div>
        {/* Navbar */}
        <nav className='flex flex-wrap w-full bg-[#028090]'>
            <img className='justify-start flex flex-wrap mr-auto' src="https://www.lindogourmet.com/images/image/LindoGourmetLogo.png"></img>
            <div className='text-black gap-24 flex justify-end items-center text-right px-auto content-center'>
                <p><a href='/product'>Products</a></p>
                <p><a href='/signin'>Sign In</a></p>
            </div>
             
                    <div class="relative my-auto flex w-[20%] flex-wrap items-stretch mx-10">
                        <input
                        type="search"
                        class="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon1" />

                        {/* <!--Search button--> */}
                        <button
                        class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                        type="button"
                        id="button-addon1"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="h-5 w-5">
                            <path
                            fill-rule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clip-rule="evenodd" />
                        </svg>
                        </button>
                    </div>        
        </nav>

        <div className='flow-root p-12 h-full flex'>
            <div className='flex flex-col float-left justify-center w-[60%] p-12'>

                <h1 className='text-[48px] font-bold my-4 text-left justify-start'>LindoGourmet</h1>


                <label className='mx-2 font-bold'>Email</label>
                 <input type='text' className='bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-2 mb-2 max-w-[70%] border-black'/>
                 <label className='mx-2 font-bold'>Password</label>
                 <input type='text' className='bg-slate-200 p-0 border text-black rounded-lg max-h-[10%] mx-2 mb-2 max-w-[70%] border-black' />  
            
            <p className='flex flex-col justify-center w-[70%] text-right'><a>Forgot Password?</a></p>
            <br></br>
            <br></br>
            <br></br>
            <div class="flex flow-root items-center mb-4 max-w-[70%]">
                <input id="default-checkbox" type="checkbox" value="" class="items-center float-left justify-start ml-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label for="default-checkbox" class="items-center float-left justify-start mx-2 text-sm font-medium text-black">Remember Me</label>
                <button className='items-center float-right justify-end align-right bg-[#028090] rounded-lg text-white px-4 py-2 flex flex-wrap'><a>Sign In &nbsp;</a><FaAngleRight /></button>
            
            
            <div className='m-24' style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, backgroundColor: "black", height: "2px" }} />
            
                <p className='text-black' style={{ margin: "0 10px" }}>or</p>
            
                <div style={{ flex: 1, backgroundColor: "black", height: "2px" }} />
            </div>
            
      

            <div className='flex flex-wrap items-center justify-center gap-10'>
                 <FaSquareFacebook className='w-24 h-24 p-4' style={{color: "#028090",}}/>
                 
                 <FaSquareTwitter className='w-24 h-24 p-4' style={{color: "#028090",}} />

                 <FaLinkedin className='w-24 h-24 p-4' style={{color: "#028090",}} />
                 

            </div>
            
            </div>
            </div>

            <div className='w-[40%] float-right h-full fit '>
            <img src='https://helloletsglow.com/wp-content/uploads/2019/04/the-ordinary-hyaluronic-acid-skincare-routine.jpg'></img>
             </div>
        </div>

        

    </div>
  )
}

export default Admin