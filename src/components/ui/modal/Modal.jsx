import style from "./Modal.module.css";
function Modal({isOpen, onClose, children}) {
  if (!isOpen) 
    return null;
  
  return (
    <div className={style.modal}>
      <div className={style.content}>
        <span className={style.close} onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}
export default Modal;
