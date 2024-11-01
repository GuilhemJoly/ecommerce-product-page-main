import React, { createContext, useState, ReactNode } from "react";
import { ImageNavigationContextProps } from "../../typescript/types";

export const ImageNavigationContext = createContext<ImageNavigationContextProps | undefined>(undefined);

export const ImageNavigationProvider: React.FC<{ children: ReactNode; max: number; onThumbnailClick: (img: string, index: number) => void; imgBig: string[] }> = ({ children, max, onThumbnailClick, imgBig }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const incrementIndex = () => {
    setCurrentIndex((currentIndex + 1) % max);
  };

  const decrementIndex = () => {
    setCurrentIndex((currentIndex - 1 + max) % max);
  };

  const setIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    decrementIndex();
    onThumbnailClick(imgBig[currentIndex], currentIndex);
  };

  const handleNextClick = () => {
    incrementIndex();
    onThumbnailClick(imgBig[currentIndex], currentIndex);
  };

  return (
    <ImageNavigationContext.Provider value={{ currentIndex, incrementIndex, decrementIndex, setIndex, handlePrevClick, handleNextClick }}>
      {children}
    </ImageNavigationContext.Provider>
  );
};