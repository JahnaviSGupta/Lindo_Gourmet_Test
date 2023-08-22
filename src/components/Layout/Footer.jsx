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
      {/* <!-- Footer --> */}
      <div class="flex justify-between py-10">
        <div class="left px-10">
          <p class="font-bold text-2xl pb-4">LindoGourmet</p>
          <p class="pb-2">Lindogourmet@gmail.com</p>
          <p>502-233-3333</p>
        </div>
        {
          showImage && (<div class="flex space-x-10 mr-10 ">
          <div class="right justify-end ">
            <h1 className="font-bold text-2l pb-2 text-justify"> Our Company</h1>
            <div class="pb-2"><a href="/about">About</a></div>
            <div class="pb-2"><a href="/contact">Contact</a></div>
            {/* <div class="pb-2">Lorem ipsum</div>
            <div class="pb-2">Lorem ipsum</div> */}
          </div>
          <div class="right justify-end">
          <h1 className="font-bold text-2l pb-2 text-justify"> Resources </h1>
            <div class="pb-2"><a href="/product">Product</a></div>
            <div class="pb-2"><a href="/dashboard">Dashboard</a></div>
            {/* <div class="pb-2">Lorem ipsum</div>
            <div class="pb-2">Lorem ipsum</div> */}
          </div>
          {/* <div class="right justify-end">
            <div class="pb-2">Lorem ipsum</div>
            <div class="pb-2">Lorem ipsum</div>
            <div class="pb-2">Lorem ipsum</div>
            <div class="pb-2">Lorem ipsum</div>
          </div> */}
        </div>)
        }
    </div>


      <div className="right justify-end">
        &copy; 2023 LindoGourmet. All rights reserved.
       </div>
    </footer>
  );
}
