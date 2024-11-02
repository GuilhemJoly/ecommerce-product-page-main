export interface LightboxProps {
  imgSmall: string[];
  imgBig: string[];
  onClose: () => void;
}

export interface BigPictureProps {
  onClick?: () => void;
  imgBig: string[];
}

export interface SmallPicturesProps {
  imgSmall: string[];
  imgBig: string[];
  selectedIndex: number;
  onThumbnailClick: (imgBig: string, index: number) => void;
}

export interface ArrowButtonProps {
  isLeftButton: boolean;
  imgChange: () => void;
}

export interface ButtonProps {
  buttonName: string;
  buttonClass: string;
  onClick?: () => void;
}

export interface CartDropdownProps {
  isOpen: boolean;
}

export interface LocalStorageProps {
  elements: string
}

export interface CartContextProps {
  cartItem: { brand: string; name: string; quantity: number; price: number, imgSmall: string[] }[];
  setCartItem: (cartItem: { brand: string; name: string; quantity: number; price: number, imgSmall: string[] }[]) => void;
  emptyCart: boolean;
  setEmptyCart: (empty: boolean) => void;
  handleDeleteCart: () => void;
}

export interface ImageNavigationContextProps {
  currentIndex: number;
  incrementImgIndex: () => void;
  decrementImgIndex: () => void;
  setImgIndex: (index: number) => void;
  handlePrevClick: () => void;
  handleNextClick: () => void;
}
