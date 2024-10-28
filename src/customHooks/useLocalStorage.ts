import { LocalStorageProps } from "../../typescript/types";

export const useLocalStorage = () => {
  const handleSubmitToStorage = ({ elements }: LocalStorageProps) => {    
    localStorage.setItem("cart", elements);
  };

  const handleGetElementFromStorage = () => {
    const element = localStorage.getItem("cart");
    return element ? JSON.parse(element) : null;
  };

  const handleRemoveFromStorage = () => {
    localStorage.removeItem("cart");
  }
  return { handleSubmitToStorage, handleGetElementFromStorage, handleRemoveFromStorage };
};