import "../styles/main.scss";
import React from 'react';
import '../styles/_modal.scss';
import PropTypes from 'prop-types';


const ModalWindow = ({isOpen, onCancel}) => {
    if(!isOpen) {
        return null;
    }
  return (
    <>
     
        <div className="modal">
          <div className="modal__window">
            <button onClick={onCancel}> Close </button>
          </div>
        </div>
      
    </>
  )
};

ModalWindow.propTypes = {
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func
}

ModalWindow.defaultProps = {
    isOpen: false,
    onCancel: () => {},
}


export default ModalWindow;
