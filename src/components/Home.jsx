import Layout from "./Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="btn w-5 h-5 "></div>
          <div className="w-full banner-wrapper mb-[60px]">
            <div className="container-x mx-auto">
              <div className="main-wrapper w-full">
                <div className="banner-card xl:flex xl:space-x-[30px] xl:h-[600px]  mb-[30px]">
                  <div data-aos="fade-right" className="xl:w-[740px] w-full h-full">
                    <a href="/about">
                      <picture>
                        <source
                          media="(min-width:1025px)"
                          srcSet={`${process.env.PUBLIC_URL}/assets/images/banner-1.png`}
                        />
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/banner-1.2.png`}
                          alt=""
                          className="w-full max-w-full h-auto object-cover"
                        />
                      </picture>
                    </a>
                  </div>
                  <div
                    data-aos="fade-left"
                    className="flex-1 flex xl:flex-col flex-row  xl:space-y-[30px] h-full"
                  >
                    <div className="w-full xl:h-1/2">
                      <a href="/event">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/banner-2.png`}
                          alt=""
                          className="w-full h-full"
                        />
                      </a>
                    </div>
                    <div className="w-full xl:h-1/2">
                      <a href="/chapter">
                        <img
                          src={`${process.env.PUBLIC_URL}/assets/images/banner-3.png`}
                          alt=""
                          className="w-full h-full"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}
