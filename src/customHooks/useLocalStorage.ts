import { LocalStorageProps } from "../../typescript/types";

export const useLocalStorage = () => {
  const handleSubmitToStorage = ({ elements }: LocalStorageProps) => {
    try {
      localStorage.setItem("cart", elements);
    } catch (error) {
      console.error(error);
      console.error("Error saving JSON from localStorage", error);
      return null;
    }
  };

  const handleGetElementFromStorage = () => {
    const element = localStorage.getItem("cart");
    if (element) {
      try {
        return element ? JSON.parse(element) : null;
      } catch (error) {
        console.error("Error parsing JSON from localStorage", error);
        return null;
      }
    }
  };

  const handleRemoveFromStorage = () => {
    localStorage.removeItem("cart");
  };
  return {
    handleSubmitToStorage,
    handleGetElementFromStorage,
    handleRemoveFromStorage,
  };
};
