import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

// create .env file in root directory with REACT_APP_PK=<publishable key> (no quotations)
const stripe_pk = process.env.REACT_APP_PK;

// loads Stripe
// let stripePromise;
// const getStripePromise = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(stripe_pk);
//   }

//   return stripePromise;
// };

const stripePromise = loadStripe(stripe_pk);

export default function Payment() {
  // react useState
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ items: [{ id: "xl-tshirt", price: "1000" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
