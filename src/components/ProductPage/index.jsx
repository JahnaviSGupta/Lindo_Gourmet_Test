export default function ProductPage() {
  return (
    <>
      <nav class="px-3 bg-[#028090] text-white flex justify-between">
        <p class="py-5">LOGO</p>
        <ul class="flex justify-end space-x-4">
          <li class="py-5 cursor-pointer">Products</li>
          <li class="py-5 cursor-pointer">Sign In/Sign Up</li>
          <li class="py-5 cursor-pointer">Lorem</li>
          {/* <!-- <input type="text"> --> */}
        </ul>
      </nav>
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

        {/* <!-- Footer --> */}
        <div class="flex justify-between py-10">
          <div class="left px-10">
            <p class="font-bold text-2xl pb-4">LindoGourmet</p>
            <p class="pb-2">Lindogourmet@gmail.com</p>
            <p>502-233-3333</p>
          </div>
          <div class="flex space-x-10 mr-10 ">
            <div class="right justify-end ">
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
            </div>
            <div class="right justify-end">
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
            </div>
            <div class="right justify-end">
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
              <div class="pb-2">Lorem ipsum</div>
            </div>
          </div>
        </div>
        <div>
          <br />
        </div>
      </div>
    </>
  );
}
