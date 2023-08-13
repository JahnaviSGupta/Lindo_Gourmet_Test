export default function OrdersTable({ className, orders }) {
  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
        <table className="w-[100vh] text-sm text-left text-gray-500 dark:text-gray-400 min-w-full">
          {/* table heading */}
          <thead>
            <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap border-b default-border-bottom uppercase">
              <th className="py-4 pl-5 w-[25%] min-w-[200px]">order</th>
              <th className="py-4 text-center w-[15%] min-w-[120px]">Id</th>
              <th className="py-4 text-center w-[26%] min-w-[208px]">Detail</th>
              <th className="py-4 text-center w-[11%] min-w-[88px]">
                createDate
              </th>
              <th className="py-4 text-center w-[5%] min-w-[40px]">price</th>
              <th className="py-4 text-right w-[18%] min-w-[144px]"></th>
            </tr>
          </thead>
          <tbody>
            {/* table heading end */}
            {/* <tr className="bg-white border-b hover:bg-gray-50">
              <td className="pl-10  py-4">
                <div className="flex space-x-6 items-center">
                  <div className="w-[100px] h-[140px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                      alt="product"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="font-medium text-[15px] text-qblack break-all">
                      iPhone 12 Pro Max 128GB
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal break-all">
                    9ASDN12ES0123K012313213213213132111111111111111111111111111
                  </span>
                </div>
              </td>
              <td className="text-right py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal break-all">
                    daslm dmladkflasmefs, ksfeslfm ,samfkeasf
                    ,manfklewafm,samdlsakflkemflajsadnfasnekjn nsd,adnwdmn
                  </span>
                </div>
              </td>
              <td className="text-right py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">2023/8/12</span>
                </div>
              </td>
              <td className="text-right py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">$38</span>
                </div>
              </td>
              <td className="px-2">
                <div className="flex flex-col pl-5">
                  <button
                    className="font-500 mt-4 px-4 py-2 w-auto h-auto rounded-[5px] bg-qteal text-white"
                    type="button"
                  >
                    View item
                  </button>
                  <button
                    className="font-500 mt-2 px-4 py-2 w-auto h-auto rounded-[5px] bg-qteal text-white"
                    type="button"
                  >
                    Track package
                  </button>
                  <button
                    className="font-500 mt-2 mb-4 px-4 py-2 w-auto h-auto rounded-[5px] bg-qteal text-white"
                    type="button"
                  >
                    Buy it again
                  </button>
                </div>
              </td>
            </tr> */}
            {orders.map((order) => (
              <tr key={order.id} className="bg-white border-b hover:bg-gray-50">
                <td className="pl-5  py-4">
                  <div className="flex space-x-6 items-center">
                    <div className="w-[100px] h-[140px] overflow-hidden flex justify-center items-center border border-[#EDEDED] rounded">
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/product-img-1.jpg`}
                        alt="product"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <p className="font-medium text-[15px] text-qblack break-all">
                        {order.orderName}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="text-center py-4 px-2">
                  <div className="flex space-x-1 items-center justify-center">
                    <span className="text-[15px] font-normal break-all">
                      {order.id}
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2">
                  <div className="flex space-x-1 items-center justify-center">
                    <span className="text-[15px] font-normal break-all">
                      {order.detail}
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2">
                  <div className="flex space-x-1 items-center justify-center">
                    <span className="text-[15px] font-normal">
                      {order.createDate}
                    </span>
                  </div>
                </td>
                <td className="text-right py-4 px-2">
                  <div className="flex space-x-1 items-center justify-center">
                    <span className="text-[15px] font-normal">
                      {order.price}
                    </span>
                  </div>
                </td>
                <td className="px-2">
                  <div className="flex flex-col pl-5">
                    <button
                      className="font-500 mt-4 px-4 py-2 w-auto h-auto rounded-[5px] bg-qteal text-white"
                      type="button"
                    >
                      View item
                    </button>
                    <button
                      className="font-500 mt-2 px-4 py-2 w-auto h-auto rounded-[5px] bg-qteal text-white"
                      type="button"
                    >
                      Track package
                    </button>
                    <button
                      className="font-500 mt-2 mb-4 px-4 py-2 w-auto h-auto rounded-[5px] bg-qteal text-white"
                      type="button"
                    >
                      Buy it again
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {/* <tr className="bg-white border-b hover:bg-gray-50">
              <td className="pl-10  py-4  w-[380px]">
                <div className="flex space-x-6 items-center">
                  <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-2.jpg`}
                      alt="product"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="font-medium text-[15px] text-qblack">
                      iPhone 12 Pro Max 128GB
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className=" flex justify-center items-center">
                  <span className="w-[20px] h-[20px] bg-[#E4BC87] block rounded-full"></span>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">Small</span>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">$38</span>
                </div>
              </td>
              <td className=" py-4">
                <div className="flex justify-center items-center">
                  <InputQuantityCom />
                </div>
              </td>
              <td className="text-right py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">$38</span>
                </div>
              </td>
              <td className="text-right py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                        fill="#AAAAAA"
                      />
                    </svg>
                  </span>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="pl-10  py-4  w-[380px]">
                <div className="flex space-x-6 items-center">
                  <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/product-img-3.jpg`}
                      alt="product"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <p className="font-medium text-[15px] text-qblack">
                      iPhone 12 Pro Max 128GB
                    </p>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className=" flex justify-center items-center">
                  <span className="w-[20px] h-[20px] bg-[#E4BC87] block rounded-full"></span>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">Small</span>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">$38</span>
                </div>
              </td>
              <td className=" py-4">
                <div className="flex justify-center items-center">
                  <InputQuantityCom />
                </div>
              </td>
              <td className="text-right py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-[15px] font-normal">$38</span>
                </div>
              </td>
              <td className="text-right py-4">
                <div className="flex space-x-1 items-center justify-center">
                  <span>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.7 0.3C9.3 -0.1 8.7 -0.1 8.3 0.3L5 3.6L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L3.6 5L0.3 8.3C-0.1 8.7 -0.1 9.3 0.3 9.7C0.7 10.1 1.3 10.1 1.7 9.7L5 6.4L8.3 9.7C8.7 10.1 9.3 10.1 9.7 9.7C10.1 9.3 10.1 8.7 9.7 8.3L6.4 5L9.7 1.7C10.1 1.3 10.1 0.7 9.7 0.3Z"
                        fill="#AAAAAA"
                      />
                    </svg>
                  </span>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
