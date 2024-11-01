import React, { createContext, useState, ReactNode } from "react";
import { ImageNavigationContextProps } from "../../typescript/types";
import { sneakersDatas } from "../datas/sneakersDatas";

export const ImageNavigationContext = createContext<ImageNavigationContextProps | undefined>(undefined);

export const ImageNavigationProvider: React.FC<{ children: ReactNode; max: number }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const max = sneakersDatas[0].imgBig.length;

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
  };

  const handleNextClick = () => {
    incrementIndex();
  };

  return (
    <ImageNavigationContext.Provider value={{ currentIndex, incrementIndex, decrementIndex, setIndex, handlePrevClick, handleNextClick }}>
      {children}
    </ImageNavigationContext.Provider>
  );
};
