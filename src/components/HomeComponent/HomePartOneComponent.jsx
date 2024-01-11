function HomePartOneComponent({ showImage }) {
  return (
    //<div className="home-about">
    //   <div className="">
    //     <div className="flex flex-col md:flex-row">
    //       <div className="md:w-1/2">
    //         <h1 className="font-600 mb-4 text-2xl md:text-4xl home-title">
    //           About
    //         </h1>
    //         <p className="font-400 mb-4 text-sans-serif italic home-parag">
    //           LindoGourmet! is here to revolutionize your shopping experience by
    //           offering you the opportunity to be the designer. Our intuitive
    //           customization tools empower you to handpick details of your
    //           desired product, ensuring that it perfectly aligns with your
    //           tastes and preferences. We are your ultimate destination for
    //           personalized products that allow you to unleash your imagination
    //           and create items that truly reflect your style, personality, and
    //           preferences.
    //         </p>
    //       </div>
    //       {showImage && (
    //         <div className="md:w-1/2 md:pl-4 flex justify-end items-center">
    //           <img
    //             // Set max and min width and height for the image
    //             className="max-w-[855px] min-w-[155px] max-h-[855px] min-h-[155px] md:w-auto md:h-auto rounded"
    //             // src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
    //             src={`${process.env.PUBLIC_URL}/assets/images/home/home1.jpg`}
    //             alt="homepage-about-img"
    //           ></img>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    //   <div className="flex justify-center">
    //     <hr className="m-6 mb-0 border-3 w-4/5 md:w-4/5 rounded-5" />
    //   </div>
    // </div>
    <div className="home-about">
      <div class="image-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/hero-image-1.png`}
          class="full-width-image"
          alt="Description of the image"
        />
        <div class="overlay">
          <div class="title">Create with us</div>
          <h2>Endless product customization</h2>
          <button className="btn bg-qteal rounded-lg text-white px-5 py-2 font-600 mt-5">
            Shop
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePartOneComponent;
