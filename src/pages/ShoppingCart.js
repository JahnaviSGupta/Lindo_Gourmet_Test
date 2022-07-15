import { useState, useEffect } from "react";

import CartItem from "../components/CartItem";
import AddToCart from "../components/AddToCart";

export default function ShoppingCart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemString = localStorage.getItem("name");
    console.log(itemString);
    if (itemString) {
      const item = JSON.parse(itemString);
      setItems(item);
    }

    function checkItems(event) {
      if (event.key === "name") {
        const item = JSON.parse(event.newValue);
        setItems(item);
      }
    }

    window.addEventListener("storage", checkItems);

    return () => {
      window.removeEventListener("storage", checkItems);
    };
  }, []);

  return (
    <div>
      {items.map((i) => (
        <CartItem name={i.name} price={i.price} img={i.img} />
      ))}
      <AddToCart />
    </div>
  );
}
