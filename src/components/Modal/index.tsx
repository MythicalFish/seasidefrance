import React from 'react';
import styles from './styles.module.css';

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, title }) => {
  function handleClose() {
    const modal = document.getElementById('gallery-modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          {title && <h2 className={styles.modalTitle}>{title}</h2>}
          <button className={styles.closeButton} onClick={handleClose}>
            ×
          </button>
        </div>
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
