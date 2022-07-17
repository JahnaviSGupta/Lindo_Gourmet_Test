import { useState, useEffect } from "react";

import CartItem from "../components/CartItem";
import Payment from "../components/Payment";

// testing; remove after
import AddToCart from "../components/AddToCart";

export default function ShoppingCart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const parsedItems = JSON.parse(localStorage.getItem("items"));
    setItems(parsedItems || []);
  }, []);
  console.log(items);

  function handleClear() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div>
      {items.map((i) => (
        <CartItem
          key={i.id}
          name={i.name}
          price={i.price}
          quantity={i.quantity}
        />
      ))}

      {/* testing; remove after */}
      <AddToCart />
      <button onClick={handleClear}>Clear Cart</button>

      <Payment />
    </div>
  );
}
