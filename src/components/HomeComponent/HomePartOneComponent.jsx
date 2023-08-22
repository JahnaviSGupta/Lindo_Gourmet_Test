import React from "react";

function HomePartOneComponent({ showImage }) {
  return (
    <div className="">
      <div className="flex flex-row">
        <div className="flex-[6] col-md-12 col-lg-6">
          <div className="">
            <h1 className="font-600 mb-[44px] text-[40px]">About</h1>
            <p className="font-400 mb-[22px] text-justify text-sans-serif italic" >
            LindoGourmet is here to revolutionize your shopping experience by offering you the opportunity to be the designer. 
            Our intuitive customization tools empower you to handpick details of your desired product, 
            ensuring that it perfectly aligns with your tastes and preferences. 
            We are your ultimate destination for personalized products that allows you to unleash your imagination 
            and create items that truly reflect your style, personality, and preferences.
            </p>
          </div>
        </div>
        {showImage && (
          <div className="flex-[6] col-md-12 col-lg-6 mr-[25px]">
            <div className="flex justify-end">
              <img
                className="mt-[10px] w-[35vh] h-[45vh] rounded"
                // src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
                src={`${process.env.PUBLIC_URL}/assets/images/home/home1.jpg`}
                alt="homepage-about-img"
              ></img>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <hr className="m-[30px] mb-[0px] border-[3px] w-[80%] rounded-[5px]" />
      </div>
    </div>
  );
}

export default HomePartOneComponent;
