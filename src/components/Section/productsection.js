import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const allProducts = [
  {
    product_id: 1,
    name: "Arc d'Triomphe",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 14.99,
    discounted_price: 0.0,
    imageSrc: "https://freepngimg.com/thumb/categories/627.png",
  },
  {
    product_id: 2,
    name: "Arc d'Triomphe",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 14.99,
    discounted_price: 0.0,
    imageSrc: "https://freepngimg.com/thumb/categories/628.png",
  },
  {
    product_id: 3,
    name: "Arc d'Triomphe 3",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 14.99,
    discounted_price: 0.0,
    imageSrc: "https://freepngimg.com/thumb/categories/629.png",
  },
  {
    product_id: 4,
    name: "Arc d'Triomphe 4",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 14.99,
    discounted_price: 0.0,
    imageSrc: "https://freepngimg.com/thumb/categories/630.png",
  },
  {
    product_id: 5,
    name: "Arc d'Triomphe 5",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 13.99,
    discounted_price: 0.0,
    imageSrc: "https://freepngimg.com/thumb/categories/631.png",
  },

  {
    product_id: 6,
    name: "Arc d'Triomphe 6",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 12.99,
    discounted_price: 0.0,
    imageSrc: "https://freepngimg.com/thumb/categories/531.png",
  },
  {
    product_id: 7,
    name: "Arc d'Triomphe 7",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 11.99,
    discounted_price: 0.0,
    imageSrc: "https://freepngimg.com/thumb/categories/632.png",
  },
  {
    product_id: 8,
    name: "Arc d'Triomphe 8",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 19.99,
    discounted_price: 10.0,
    imageSrc: "https://freepngimg.com/thumb/categories/633.png",
  },
  {
    product_id: 9,
    name: "Arc d'Triomphe 9",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 20.99,
    discounted_price: 10.0,
    imageSrc: "https://freepngimg.com/thumb/categories/634.png",
  },
  {
    product_id: 10,
    name: "Arc d'Triomphe 10",
    description:
      "This beautiful and iconic T-shirt will no doubt lead you to your own triumph.",
    price: 21.99,
    discounted_price: 10.0,
    imageSrc: "https://freepngimg.com/thumb/categories/635.png",
  },
];

export default function ProductSection(props) {
  const { products, handleAddProduct } = props;

  // showing the products
  return (
    <Box>
      <Box className="product-list">
        {allProducts.map((product) => {
          return (
            <Box className="product-list-item" key={product.product_id}>
              <Link
                className="product-list-item-link"
                to={`/productdetails/${product.product_id}`}
              >
                <Box className="product-list-item-image">
                  <img src={product.imageSrc} alt={product.name} />
                </Box>
                <Box className="product-list-item-name">
                  <Box>
                    <Typography
                      variant="span"
                      className="product-list-item-name-text"
                    >
                      Product Name:{" "}
                    </Typography>
                    {product.name}
                  </Box>
                  <Box className="product-list-item-name-text-price">
                    {" "}
                    <Typography
                      variant="span"
                      className="product-list-item-name-text-price"
                    >
                      Price:{" "}
                    </Typography>
                    {"$"}
                    {product.price}
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      variant="span"
                      className="product-list-item-name-discounted-text"
                    >
                      Discounted Price:{" "}
                    </Typography>{" "}
                    {"$"}
                    {product.discounted_price}
                  </Box>

                  <Box>
                    {" "}
                    <Typography
                      variant="h6"
                      className="product-list-item-name-text"
                    >
                      {" "}
                      Product Description:{" "}
                    </Typography>{" "}
                    {product.description}
                  </Box>
                </Box>
              </Link>

              <Box>
                <Button
                  sx={{
                    marginTop: "8px",
                    marginBottom: "8px",
                    width: "300px",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    handleAddProduct(product);
                  }}
                >
                  Add to Cart
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
