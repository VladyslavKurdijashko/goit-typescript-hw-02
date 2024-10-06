import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.content}>
        <img
          src={image.urls.regular}
          alt={image.alt_description}
          className={styles.image}
        />
        {image.description && (
          <p className={styles.description}>{image.description}</p>
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
