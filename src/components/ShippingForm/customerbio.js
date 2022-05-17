import React from "react";
import { Box, Input, Typography } from "@mui/material";

export function CustomerBio({ setCustomerInformation, customerInformation }) {
  const handleCustomerDetails = (e) => {
    setCustomerInformation({
      ...customerInformation,
      [e.target.name]: e.target.value,
    });
  };

  console.log(customerInformation);

  return (
    <Box className="customer-details">
      <Typography variant="h4">Customer Details</Typography>
      <Typography>Please provide your details to create an account.</Typography>

      <Input
        type="text"
        name="fullName"
        className="full-name"
        placeholder="Full Name"
        value={customerInformation.fullName}
        onChange={handleCustomerDetails}
      />

      <Input
        type="email"
        name="email"
        className="email"
        placeholder="Email"
        value={customerInformation.email}
        onChange={handleCustomerDetails}
      />
      <Input
        type="number"
        className="phone-number"
        name="phoneNumber"
        placeholder="Phone"
        value={customerInformation.phoneNumber}
        onChange={handleCustomerDetails}
      />
    </Box>
  );
}
