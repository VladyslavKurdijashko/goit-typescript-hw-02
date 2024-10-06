// src/components/ImageModal/ImageModal.tsx
import React from 'react';
import { Image } from "../../types"; // Імпорт типу

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null; // Використання спільного типу
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <div>
      <h2>{image.alt_description}</h2>
      <img src={image.urls.regular} alt={image.alt_description} />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ImageModal;
