import React, { Component, Fragment } from 'react';

import Modal from './Modal';
import Button from '../Button/Button';


export default class Sandbox extends Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  handleSubmit = () => {
    console.log('Submit function');
    this.setState({ isOpen: false });
  };

  handleCancel = () => {
    console.log('Cancel function');
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <Fragment>
        <h1 className="mt-0">Modal</h1>

        <Button onClick={ this.openModal }>Show modal</Button>
        <Modal
          title="Test Dialog window"
          isOpen={ this.state.isOpen }
          onCancel={ this.handleCancel }
          onSubmit={ this.handleSubmit }
        />
      </Fragment>
    )
  };
};
