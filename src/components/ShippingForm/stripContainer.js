import React from "react";
import { Box } from "@mui/system";
import InjectedCheckoutForm from "./stripSection";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KyDl1FSUCdIxuWfv3RcZBk7IxRl04rR0T1lhx4JaaNAIfTGKWqYssSE8zYCeGH6wdu0CnbiqPJOFSBgPYg1eUPp00NZXnTltu"
);

console.log(stripePromise);

export function StripContainer({
  customerInformation,
  setCustomerInformation,
}) {
  return (
    <Box>
      <Elements stripe={stripePromise}>
        <InjectedCheckoutForm
          customerInformation={customerInformation}
          setCustomerInformation={setCustomerInformation}
        />
      </Elements>
    </Box>
  );
}
