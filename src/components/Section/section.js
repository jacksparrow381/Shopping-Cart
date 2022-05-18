import { Box } from "@mui/material";
import { SideBarSection } from "./sidebarsection";
import ProductSection from "./productsection";
import "./section.css";

export function Section(props) {
  const { products, handleAddProduct } = props;

  // main section

  return (
    <Box>
      <SideBarSection />
      <ProductSection products={products} handleAddProduct={handleAddProduct} />
    </Box>
  );
}
