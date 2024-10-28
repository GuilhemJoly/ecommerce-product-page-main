export interface LightboxProps {
  imgSmall: string[];
  image: string;
  imgBig: string[];
  selectedIndex: number;
  onThumbnailClick: (imgBig: string, index: number) => void;
  onClose: () => void;
}

export interface BigPictureProps {
  image: string;
  onClick?: () => void;
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
