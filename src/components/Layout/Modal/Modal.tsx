import React from 'react'

import './Modal.scss'

interface Props {
    closeModal: () => void;
    modalOpen: boolean;
}

const Modal: React.FC<Props> = ({ children, closeModal, modalOpen }) => {
  return (
    <div className={modalOpen ? 'mdl-Modal mdl-Modal-open' : 'mdl-Modal'}>
      <div className="mdl-Modal_Backdrop" onClick={closeModal}/>

      <div className="mdl-Modal_Body">
        <div className="mdl-Modal_Inner">
          {children}
        </div>
      </div>
    </div>
  )
};

export default Modal;
