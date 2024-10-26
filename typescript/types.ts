export interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export interface BigPictureProps {
  image: string;
  onClick: () => void;
}
