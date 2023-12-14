import { useState } from "react";
import { connect } from 'react-redux';
import { removeRow } from '../../lib/CartActions';
import CartItem from "./CartItem";


const mapStateToProps = (state) => ({
  rowsData: state.rowsData,
});

const mapDispatchToProps = {
  removeRow,
};

const ProductsTable = ({ className, rowsData, removeRow }) => {
  // Temp Array for Wishlist Table


  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRowsData = rowsData.filter((rowData) =>
    rowData[1].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleRemove = (removedRowData) => {
    removeRow(removedRowData);
  };
  

  return (
    <div className={`w-full ${className || ""}`}>
      <div className="relative w-full">
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search products"
            className="px-4 py-2 w-full border border-gray-300 focus:outline-none focus:ring focus:ring-blue-200"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        {/* Table elements */}
        {filteredRowsData.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <tbody>
              {/* table heading */}
              <tr className="sticky top-0 text-[13px] font-medium text-black bg-[#F6F6F6] whitespace-nowrap px-2 border-b default-border-bottom uppercase">
                <td className="py-4 pl-4 block whitespace-nowrap min-w-[300px]">
                  product
                </td>
                <td className="py-4 whitespace-nowrap text-center">color</td>
                <td className="py-4 whitespace-nowrap text-center">size</td>
                <td className="py-4 whitespace-nowrap text-center">price</td>
                <td className="py-4 whitespace-nowrap text-center">quantity</td>
                <td className="py-4 whitespace-nowrap text-center">total</td>
                
                <td className="py-4 whitespace-nowrap text-right w-[114px]"></td>
              </tr>
              {/* table heading end */}

              {filteredRowsData.map((rowData) => (
                <CartItem rowsData={rowData} key={rowData[0]} onRemove={handleRemove} />
              ))}

              
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center h-32 bg-gray-100">
            <p>No items found in the wishlist!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsTable);