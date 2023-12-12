import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [rowsData, setRowsData] = useState([]);

  const updateRowsData = (newRowsData) => {
    setRowsData(newRowsData);
  };

  return (
    <CartContext.Provider value={{ rowsData, updateRowsData }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
