import CartItem from "./CartItem";

export default function ProductsTable({ className }) {

  //TODO logic when inputQuantity increases, increase the total price
  //TODO logic for calculating subtotal

   // Cart Data comes here (Dummy Data for now)
    const rowsData = [ // Order: Images, Product, Color, Size, Prize, Total
      ['1.jpg','MacBook Pro 15 inch ', '#E4BC87', 'Small', '$120', '$120'],
      ['2.jpg','iPhone 13 Pro Max 64GB', '#E4BC87', 'Small', '$38', '$38'],
      ['3.jpg','iPad Air 64GB', '#E4BC87', 'Medium', '$28', '$28'],
      ['4.jpg','Apple Watch Series 6', '#E4BC87', 'Small', '$20', '$20'],
      ['5.jpg','iMac 27 inch', '#E4BC87', 'Big', '$150', '$150'],
      ['6.jpg','iPhone SE 128GB', '#E4BC87', 'Small', '$25', '$25'],
      ['7.jpg','MacBook Air 13 inch', '#E4BC87', 'Small', '$90', '$90'],
      ['8.jpg','AirPods Pro', '#E4BC87', 'Tiny', '$15', '$15'],
      ['9.jpg','iPad Pro 256GB', '#E4BC87', 'Big', '$45', '$45']
    ];

  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative w-full overflow-x-auto border border-[#EDEDED]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {/* table heading */}
            <tr className="text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
                      <td className="py-4 pl-10 block whitespace-nowrap min-w-[300px]">
                        product
                      </td>
                      <td className="py-4 whitespace-nowrap text-center">color</td>
                      <td className="py-4 whitespace-nowrap text-center">size</td>
                      <td className="py-4 whitespace-nowrap text-center">price</td>
                      <td className="py-4 whitespace-nowrap  text-center">quantity</td>
                      <td className="py-4 whitespace-nowrap  text-center">total</td>
                      <td className="py-4 whitespace-nowrap text-right w-[114px]"></td>
            </tr>
            {/* table heading end */} 

            {/* The Items in the cart are updated by this component based on the data given above */}
            <CartItem rowsData = {rowsData}/>

          </tbody>
        </table>
      </div>
    </div>
  );
}
