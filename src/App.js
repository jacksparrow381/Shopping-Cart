import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShippingDetails } from "./components/ShippingForm/shippingdetails";
import { ProductDetails } from "./components/ProductDetails/productdetails";
import { HomePage } from "./components/Homepage/homepage";
import { FinishOrder } from "./components/FinishOrder/finishorder";

// Showing data in main app.js and routing is applied

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shippingdetails" element={<ShippingDetails />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
        <Route path="finishorder" element={<FinishOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
