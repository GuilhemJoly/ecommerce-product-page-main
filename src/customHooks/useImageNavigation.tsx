import { useContext } from "react";
import { ImageNavigationContext } from "../context/ImageNavigationContext";

export const useImageNavigation = () => {
    const context = useContext(ImageNavigationContext);
    if (!context) {
      throw new Error("useImageNavigation must be used within an ImageNavigationProvider");
    }
    return context;
};