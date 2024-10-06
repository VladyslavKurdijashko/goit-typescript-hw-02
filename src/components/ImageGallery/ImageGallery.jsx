
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.item}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
