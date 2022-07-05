import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51LIEGVGJxBRjftygyU6qJ0M5MZjfaCPMyfyJn2VMP2ExrD7iSutn3lwvBi5wW1j5RXFszV19qPC9E2nC4wTErIol00wrIkI0jB";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  );
}
