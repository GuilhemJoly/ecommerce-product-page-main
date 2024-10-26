export interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export interface BigPictureProps {
  image: string;
  onClick: () => void;
}

export interface SmallPicturesProps {
  imgSmall: string[];
  imgBig: string[];
  selectedIndex: number;
  onThumbnailClick: (imgBig: string, index: number) => void;
}
