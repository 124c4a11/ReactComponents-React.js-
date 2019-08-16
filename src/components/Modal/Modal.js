import React from 'react';
import PropTypes from 'prop-types';

import Portal from '../Portal/Portal';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

import './Modal.scss';


const Modal = (props) => {
  const {
    title,
    children,
    isOpen,
    onCancel,
    onSubmit
  } = props;

  return (
    <>
      { isOpen &&
        <Portal>
          <div className="modal">
            <div className="modal__window">
              <div className="modal__header">
                <div className="modal__title">{ title }</div>
                <Icon name="times" onClick={ onCancel } />
              </div>
              <div className="modal__body">
                { children }
              </div>
              <div className="modal__footer">
                <Button onClick={ onCancel } invert>Cancel</Button>
                <Button onClick={ onSubmit }>Submit</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};


Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func
};


Modal.defaultProps = {
  title: 'Modal title',
  children: null,
  isOpen: false,
  onSubmit: () => {},
  onCancel: () => {}
};


export default Modal
