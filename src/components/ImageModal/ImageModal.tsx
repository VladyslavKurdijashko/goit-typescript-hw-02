
import React from 'react';
import Modal from 'react-modal';
import { Image } from '../../types';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: Image | null;
}


Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, image }) => {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      <div>
        {/* <h2>{image.alt_description}</h2> */}
        <img src={image.urls.regular} alt={image.alt_description} />
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </Modal>
  );
};

export default ImageModal;
