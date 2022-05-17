import { useState } from "react";
import { Box, Stepper, Step, Button, StepLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomerBio } from "./customerbio";
import { ShippingInfo } from "./shippinginfo";
import { StripContainer } from "./stripContainer";
import { OrderConfirmation } from "./orderconfirmation";
import { steps } from "../constant";
import "./shippingcases.css";

export function ShippingDetails() {
  const [activeStep, setActiveStep] = useState(0);

  const [customerInformation, setCustomerInformation] = useState([]);

  const TotalPrice = JSON.parse(localStorage.getItem("totalPrice"));

  const [discountedPrice, setDiscountedPrice] = useState(TotalPrice);

  const handleVoucher = () => {
    setDiscountedPrice(TotalPrice - 30 / 100);
  };

  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  const nextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const previousStep = (e) => {
    if (activeStep !== steps.length) {
      setActiveStep(activeStep - 1);
    }
  };

  const hanldeConfirmationOfOrder = () => {
    setActiveStep(activeStep + 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <CustomerBio
            setCustomerInformation={setCustomerInformation}
            customerInformation={customerInformation}
          />
        );

      case 1:
        return (
          <ShippingInfo
            setCustomerInformation={setCustomerInformation}
            customerInformation={customerInformation}
          />
        );

      case 2:
        return (
          <StripContainer
            setCustomerInformation={setCustomerInformation}
            customerInformation={customerInformation}
          />
        );
      case 3:
        return (
          <OrderConfirmation
            cartItems={cartItems}
            discountedPrice={discountedPrice}
            handleVoucher={handleVoucher}
            customerInformation={customerInformation}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <Box className="checkout-main-box">
      <Box>
        <Box className="checkout-main-box-container">
          <Stepper
            className="checkout-stepper"
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <br />
        <Box className="checkout-content">
          <Box className="checkout-content-inner">
            <Box>{getStepContent(activeStep)}</Box>

            <Box className="checkout-button-box">
              <Button
                disabled={activeStep === 0}
                variant="contained"
                color="primary"
                onClick={(e) => previousStep(e)}
              >
                Previous
              </Button>
              {activeStep === steps.length - 1 ? (
                <Button variant="contained" color="primary">
                  <Link to="/finishorder" className="checkout-button-link">
                    Place Order
                  </Link>
                </Button>
              ) : activeStep === steps.length - 2 ? (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={hanldeConfirmationOfOrder}
                >
                  Proceed To Confirm Your Order
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => nextStep(e)}
                >
                  Next
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
