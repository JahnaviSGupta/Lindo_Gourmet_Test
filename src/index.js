import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "use-shopping-cart";

const pk = process.env.REACT_APP_PK;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={pk}
    successUrl={`${window.location.origin}/success`}
    cancelUrl={`${window.location.origin}/cart`}
    currency="USD"
  >
    <App />
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
