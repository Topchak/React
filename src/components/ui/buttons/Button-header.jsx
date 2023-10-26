import Modal from "../modal/Modal"
import { useState } from "react";
function Button() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }
  return (
    <div>
      <button onClick={openModal} className="btn">Button</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Это модальное окно</h2>
        <p>Содержимое модального окна.</p>
      </Modal>
    </div>

  )
}
export default Button