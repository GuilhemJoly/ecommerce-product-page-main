import React, { createContext, useState, ReactNode } from "react";
import { ImageNavigationContextProps } from "../../typescript/types";
import { sneakersDatas } from "../datas/sneakersDatas";

export const ImageNavigationContext = createContext<ImageNavigationContextProps | undefined>(undefined);

export const ImageNavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const max = sneakersDatas[0].imgBig.length; 

  const incrementImgIndex = () => {
    setCurrentIndex((currentIndex + 1) % max);
  };

  const decrementImgIndex = () => {
    setCurrentIndex((currentIndex - 1 + max) % max);
  };

  const setImgIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    decrementImgIndex();
  };

  const handleNextClick = () => {
    incrementImgIndex();
  };

  return (
    <ImageNavigationContext.Provider value={{ currentIndex, incrementImgIndex, decrementImgIndex, setImgIndex, handlePrevClick, handleNextClick }}>
      {children}
    </ImageNavigationContext.Provider>
  );
};
