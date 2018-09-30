import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal 
    isOpen={ !!props.selectedOption } // If there's a string = true, it's open
    contentLabel="Option Selected"
    onRequestClose={ props.handleDeletedSelectedOption } /* Clicking on the background or pressing the ESC key will call on the function passed. */
    closeTimeoutMS={200}
    className="modal"
    ariaHideApp={ false } // Hides console error
  >
    <h3 className="modal__title">Selected Option</h3>
    { props.selectedOption && <p className="modal__body">{ props.selectedOption }</p>}
    <button onClick={ props.handleDeletedSelectedOption } className="button">Close</button>
  </Modal>
);

export default OptionModal;