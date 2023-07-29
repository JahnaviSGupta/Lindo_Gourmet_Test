import React from 'react'

function HomePartOneComponent() {
  return (
    <div className="">
      <div className='flex flex-row'>
        <div className="flex-[6] col-md-12 col-lg-6">
          <div className="">
            <h1 className='font-600 mb-[44px] text-[40px]'>About</h1>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with
              the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker
              including versions of Lorem Ipsum.{" "}
            </p>
          </div>

        </div>

        <div className="flex-[6] col-md-12 col-lg-6 mr-[25px]">
          <div className= "flex justify-end">
              <img
                className="mt-[10px] w-[35vh] h-[45vh] rounded"
                src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
                alt="homepage-about-img"
              ></img>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <hr className='m-[30px] mb-[0px] border-[3px] w-[80%] rounded-[5px]' />
      </div>
    </div>
  );
}

export default HomePartOneComponent;
