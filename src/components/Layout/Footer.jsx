import { useEffect, useState } from "react";

export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showImage, setShowImage] = useState(true);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 600) {
      setShowImage(false);
    } else {
      setShowImage(true);
    }
  }, [windowWidth]);

  return (
    <footer className="footer-section-wrapper bg-white print:hidden">
      <div className="container-x block mx-auto pt-[56px]">
        <div className="w-full flex flex-col items-center mb-[50px]">
          <div className="w-full h-[1px] bg-[#E9E9E9]"></div>
        </div>
        <div className="lg:flex justify-between mb-[50px]">
          <div className="lg:w-[424px]  ml-0 w-full mb-10 lg:mb-0">
            <a href="/about">
              <h1 className="text-[18] font-500 text-[#2F2F2F] mb-5">
                About Us
              </h1>
            </a>
            <p className="text-[#9A9A9A] text-[15px] w-[247px] leading-[28px]">
              <div>LindoGourmet</div>
              <div>Phone: (408) 600-1202 </div>
              <div>
                Email:&nbsp;
                <a
                  className="email-link cursor-pointer"
                  href="mailto: support@lindogourmet.com"
                >
                  support@lindogourmet.com
                </a>
              </div>
              <div>897 Independence Ave. #2G, Mountain View, CA 94043 </div>
              <div>
                See our&nbsp;
                <a
                  className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                  href=""
                >
                  Terms and Conditions
                </a>{" "}
                and&nbsp;
                <a
                  className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize"
                  href=""
                >
                  Privacy Policy.
                </a>
              </div>
            </p>
          </div>
          <div className="flex-1 lg:flex justify-end">
            <div className="lg:w-1/3 lg:flex lg:flex-col items-center w-full mb-10 lg:mb-0 ">
              <div>
                <div className="mb-5">
                  <h6 className="text-[18] font-500 text-[#2F2F2F]">
                    Our Company
                  </h6>
                </div>
                <div>
                  <ul className="flex flex-col space-y-4 ">
                    <li>
                      <a href="/about">
                        <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          About
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="/contact">
                        <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                          Contact
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full mb-10 lg:mb-0">
              <div className="mb-5">
                <h6 className="text-[18] font-500 text-[#2F2F2F]">Resources</h6>
              </div>
              <div>
                <ul className="flex flex-col space-y-4 ">
                  <li>
                    <a href="/product">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Product
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard">
                      <span className="text-[#9A9A9A] text-[15px] hover:text-qblack border-b border-transparent hover:border-qblack cursor-pointer capitalize">
                        Dashboard
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-bar border-t border-qgray-border lg:h-[82px] lg:flex justify-between items-center">
          <div className="flex lg:space-x-5 justify-between items-center mb-3">
            <span className="sm:text-base text-[10px] text-qgray font-300">
              &copy; 2023 IpserLab LLC. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
    // <------- OLD FOOTER ------>
    // <footer className="footer-section-wrapper bg-white print:hidden">
    //   {/* <!-- Footer --> */}
    //   <div className="flex justify-between py-10">
    //     <div className="left px-5">
    //       <p className="font-bold text-2xl pb-4">LindoGourmet</p>
    //       <p className="pb-2">Lindogourmet@gmail.com</p>
    //       <p>502-233-3333</p>
    //     </div>
    //     {showImage && (
    //       <div className="flex space-x-10 mr-10 ">
    //         <div className="right justify-end ">
    //           <h1 className="font-bold text-2l pb-2 text-justify">
    //             {" "}
    //             Our Company
    //           </h1>
    //           <div className="pb-2">
    //             <a href="/about">About</a>
    //           </div>
    //           <div className="pb-2">
    //             <a href="/contact">Contact</a>
    //           </div>
    //           {/* <div class="pb-2">Lorem ipsum</div>
    //         <div class="pb-2">Lorem ipsum</div> */}
    //         </div>
    //         <div className="right justify-end">
    //           <h1 className="font-bold text-2l pb-2 text-justify">
    //             {" "}
    //             Resources{" "}
    //           </h1>
    //           <div className="pb-2">
    //             <a href="/product">Product</a>
    //           </div>
    //           <div className="pb-2">
    //             <a href="/dashboard">Dashboard</a>
    //           </div>
    //           {/* <div class="pb-2">Lorem ipsum</div>
    //         <div class="pb-2">Lorem ipsum</div> */}
    //         </div>
    //         {/* <div class="right justify-end">
    //         <div class="pb-2">Lorem ipsum</div>
    //         <div class="pb-2">Lorem ipsum</div>
    //         <div class="pb-2">Lorem ipsum</div>
    //         <div class="pb-2">Lorem ipsum</div>
    //       </div> */}
    //       </div>
    //     )}
    //   </div>

    //   <div className="right justify-end">
    //     &copy; 2023 LindoGourmet. All rights reserved.
    //   </div>
    // </footer>
  );
}
