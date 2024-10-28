import { createContext, ReactNode, useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { CartContextProps } from "../../typescript/types";

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [emptyCart, setEmptyCart] = useState(false);
  const { handleGetElementFromStorage } = useLocalStorage();
  const [cartItem, setCartItem] = useState(handleGetElementFromStorage() || []);

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, emptyCart, setEmptyCart }}>
      {children}
    </CartContext.Provider>
  );
};