import { useState } from "react";
import InputQuantityCom from "../Helpers/InputQuantityCom";

export default function CartItem(props) {
  const { rowsData, onRemove, onQuantityUpdate } = props; // Destructure onQuantityUpdate from props
  const [quantity, setQuantity] = useState(1);

  const handleRemoveClick = () => {
    onRemove(rowsData);
  };

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);

    // Calculate the total price here based on the updated quantity
    const total = rowsData[4] * newQuantity;

    // Call the onQuantityUpdate function to notify the parent component (ProductsTable)
    onQuantityUpdate(rowsData[0], newQuantity);
  };

  const total = rowsData[4] * quantity; // Calculate the total price based on the current quantity

  return (
    <tr className="bg-white border-b hover:bg-gray-50" key={rowsData[0]}>
      {/* Product */}
      <td className="pl-10 py-4 w-[380px]">
        <div className="flex space-x-6 items-center">
          <div className="w-[80px] h-[80px] overflow-hidden flex justify-center items-center border border-[#EDEDED]">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Cart/${rowsData[0]}`}
              alt="product"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <p className="font-medium text-[15px] text-qblack">{rowsData[1]}</p>
          </div>
        </div>
      </td>

      {/* Color */}
      <td className="text-center py-4 px-2">
        <div className="flex justify-center items-center">
          <span
            className={`w-[20px] h-[20px] bg-[${rowsData[2]}] block rounded-full`}
          ></span>
        </div>
      </td>

      {/* Size */}
      <td className="text-center py-4 px-2">
        <div className="flex space-x-1 items-center justify-center">
          <span className="text-[15px] font-normal">{rowsData[3]}</span>
        </div>
      </td>

      {/* Price */}
      <td className="text-center py-4 px-2">
        <div className="flex space-x-1 items-center justify-center">
          <span className="text-[15px] font-normal">${rowsData[4]}</span>
        </div>
      </td>

      {/* Quantity Selector */}
      <td className=" py-4">
        <div className="flex justify-center items-center">
          <InputQuantityCom onQuantityChange={handleQuantityChange} />
        </div>
      </td>

      {/* Total Price */}

      <td className="text-right py-4">
        <div className="flex space-x-1 items-center justify-center">
          <span className="text-[15px] font-normal">${total}</span>
        </div>
      </td>

      {/* Cross Mark */}
      <td className="text-right py-4">
        <div className="flex space-x-1 items-center justify-center">
          {/* <span onClick={handleRemoveClick} className="mt-[20px] mr-[15px] inline-flex cursor-pointer "> */}
          <span onClick={handleRemoveClick} style={{ cursor: "pointer" }}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className="inline fill-current text-[#AAAAAA] hover:text-qred"
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
  );
}
