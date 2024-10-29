import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { CartContextProps } from "../../typescript/types";

export const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const { handleGetElementFromStorage, handleRemoveFromStorage } = useLocalStorage();
  const [cartItem, setCartItem] = useState(handleGetElementFromStorage() || []);
  const [emptyCart, setEmptyCart] = useState(true);

    useEffect(() => {
      const storageItem = handleGetElementFromStorage();
      if (storageItem) {
        const cartElements = {
          brand: storageItem?.a?.brand || "",
          name: storageItem?.b?.name || "",
          price: storageItem?.c?.price || 0,
          quantity: storageItem?.d?.quantity || 0,
          imgSmall: storageItem?.e?.imgSmall || [""],
        };
        if (cartItem.length > 0) {
          setEmptyCart(false);
        } 
        else if (storageItem) {
          setCartItem([cartElements]);
          setEmptyCart(false);
        } 
        else {
          setEmptyCart(true);
        }
      }
    }, [cartItem, handleGetElementFromStorage, setCartItem, emptyCart, setEmptyCart]);
    
    const handleDeleteCart = () => {
      handleRemoveFromStorage();
      setEmptyCart(true);
      setCartItem([]);
    };

  return (
    <CartContext.Provider value={{ cartItem, setCartItem, emptyCart, setEmptyCart, handleDeleteCart }}>
      {children}
    </CartContext.Provider>
  );
};