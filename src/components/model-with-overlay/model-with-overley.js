import React, { useState } from "react";

function ModalWithOverlay() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isOpen && (
        <div className="overlay">
          <div className="modal">
            <button className="modal-close" onClick={toggleModal}>
              Close
            </button>
            <p>This is the modal content.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalWithOverlay;
