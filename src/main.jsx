import React from "react";
import ReactDOM from "react-dom/client"; // Update the import
import App from "./App";
import { CartProvider } from "./contexts/CartContext";
import "./index.css";

// Create a root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App wrapped in CartProvider
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
