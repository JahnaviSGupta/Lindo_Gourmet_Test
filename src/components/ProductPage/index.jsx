import Layout from "../Layout";
export default function ProductPage() {
  return (
    <Layout>
      <div class="divide-y-2">
        <div class="text-2xl font-bold px-[10] pt-[30px] pb-[5px]">
          Products
        </div>

        {/* <!-- Categories and images --> */}
        <div>
          <div class="products pt-[10px] flex">
            <div class="categories w-52">
              <h2 class="pb-3 px-2 ">Categories&nbsp;&nbsp; {">"}</h2>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="pl-9 flex pb-3">
                <p>risus ultricies</p>
                <div class="pl-4">
                  <input type="checkbox" />
                </div>
              </div>
            </div>
            <div class="productImages1 pl-9">
              {/* <!-- cdcdccd --> */}
              <div class="flex">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
                  class="w-40 h-48 m-10"
                  alt="Description of the image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
                  class="w-40 h-48 m-10"
                  alt="Description of the image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
                  class="w-40 h-48 m-10"
                  alt="Description of the image"
                />
              </div>
              <div class="flex">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
                  class="w-40 h-48 m-10"
                  alt="Description of the image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
                  class="w-40 h-48 m-10"
                  alt="Description of the image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
                  class="w-40 h-48 m-10"
                  alt="Description of the image"
                />
              </div>
            </div>
          </div>
          <div class="flex">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
              class="w-40 h-48 m-10"
              alt="Description of the image"
            />
          </div>
        </div>
        <div>
          <br />
        </div>
      </div>
    </Layout>
  );
}
