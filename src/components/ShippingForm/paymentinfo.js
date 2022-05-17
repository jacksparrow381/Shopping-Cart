import React from "react";
import {
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  Input,
  Typography,
} from "@mui/material";

import {
  CardElement,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "blue",
      fontSize: "16px",
      fontFamily: "sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF",
      },
    },
    invalid: {
      color: "red",
      ":focus": {
        color: "red",
      },
    },
  },
};

function PaymentInfo({ customerInformation, setCustomerInformation }) {
  const handleCustomerDetails = (e) => {
    setCustomerInformation({
      ...customerInformation,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box className="payment-details">
      <Typography variant="h4">Payment Details</Typography>
      <Box className="payment-method">Select the payment method:</Box>
      <RadioGroup
        row
        name="radio-buttons-group"
        className="radio-buttons-group"
      >
        <FormControlLabel
          name="paymentMethod"
          value="paypal"
          control={<Radio />}
          label="PayPal"
          onChange={handleCustomerDetails}
        />
        <FormControlLabel
          name="paymentMethod"
          value="mastercard"
          control={<Radio />}
          label="MasterCard"
          onChange={handleCustomerDetails}
        />
        <FormControlLabel
          name="paymentMethod"
          value="unionpay"
          control={<Radio />}
          label="UnionPay"
          onChange={handleCustomerDetails}
        />
      </RadioGroup>
      <label>
        {/* <CardElement options={CARD_ELEMENT_OPTIONS} /> */}
        <CardNumberElement
          className="card-number"
          options={CARD_ELEMENT_OPTIONS}
        />
        <CardCvcElement
          className="CVV"
          placeholder="CVV (3 digits)"
          options={CARD_ELEMENT_OPTIONS}
        />
        <CardExpiryElement
          className="expiry-date"
          options={CARD_ELEMENT_OPTIONS}
        />
      </label>
    </Box>
  );
}

export default PaymentInfo;
