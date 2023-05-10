import React from 'react';
import ModalStyles from './StyledComponents';

const Modal = ({ setHandleModal }) => {
  const handleCancelClick = () => {
    setHandleModal(false);
  };

  return (
    <ModalStyles>
      <div className='background' />
      <div className='modal'>
        <div>
          <div className='body'>
            <p className='title'>https://calendar.com</p>
            <p className='text'>Enter event time:</p>
            <p className='text'>YYYY-MM-DD HH:mm:ss</p>
            <input />
            <div className='footer'>
              <div className='buttonBoxLeft'>
                <button onClick={handleCancelClick}>Cancel</button>
              </div>
              <div className='buttonBoxRight'>
                <button onClick={handleCancelClick}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalStyles>
  );
};

export default Modal;
