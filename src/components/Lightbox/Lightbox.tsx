interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = () => {
  return (
    <div>
      <h1>Lightbox</h1>
    </div>
  );
};
export default Lightbox;
