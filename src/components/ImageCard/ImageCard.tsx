import React from 'react';
import styles from "./ImageCard.module.css";

interface Image {
  id: string;
  urls: {
    small: string;
  };
  alt_description: string;
}

interface ImageCardProps {
  image: Image;
  onImageClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onImageClick }) => {
  return (
    <div className={styles.card} onClick={() => onImageClick(image)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={styles.image}
      />
    </div>
  );
};

export default ImageCard;
