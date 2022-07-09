import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

// create .env file in root directory with REACT_APP_PK=<publishable key> (no quotations)
const pk = process.env.REACT_APP_PK;
// on next line of .env file, include REACT_APP_PRICE=<price api key>
const itemPrice = process.env.REACT_APP_PRICE;

// loads Stripe
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(pk);
  }

  return stripePromise;
};

export default function Payment() {
  // react useState
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // the item being bought
  const item = {
    price: itemPrice,
    quantity: 1,
  };

  // generic checkout options for one-time payments
  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  // redirects to integrated Stripe checkout page
  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  // safeguard for general errors
  if (stripeError) alert(stripeError);

  return (
    <div>
      <h1>Test Product: $10</h1>
      <button onClick={redirectToCheckout} disabled={isLoading}>
        <div>
          <p>{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
}
