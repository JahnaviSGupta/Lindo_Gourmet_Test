import { useState } from "react";

export default function CartItem(props) {
  const [amount, setAmount] = useState(props.quantity);
  var items = JSON.parse(localStorage.getItem("items") || "[]");

  function handleQuantityChange(e) {
    setAmount(e.target.value);

    if (!(Math.abs(e.target.value) >= 1)) return;
    const newItems = items.map((obj) => {
      if (obj.name === props.name) {
        return { ...obj, quantity: e.target.value };
      }
      return obj;
    });

    localStorage.setItem("items", JSON.stringify(newItems));
  }

  return (
    <div>
      {props.name} ... ${props.price}
      <input
        onChange={(e) => handleQuantityChange(e)}
        type="number"
        value={amount}
        min="1"
      />
    </div>
  );
}
