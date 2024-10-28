import { useState } from "react";

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };

  return { quantity, incrementQuantity, decrementQuantity };
};