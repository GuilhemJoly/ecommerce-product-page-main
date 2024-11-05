import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { CartProvider } from "@context/CartContext.tsx";
import { ImageNavigationProvider } from "@context/ImageNavigationContext.tsx";
import App from "./App.tsx";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <CartProvider>
        <ImageNavigationProvider>
          <App />
        </ImageNavigationProvider>
      </CartProvider>
    </Router>
  </StrictMode>
);
