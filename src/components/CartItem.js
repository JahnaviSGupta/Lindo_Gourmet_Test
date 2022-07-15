import React from "react";

export default function CartItem(props) {
  return (
    <div>
      <h1>
        {props.name} ... ${props.price}
      </h1>
    </div>
  );
}
