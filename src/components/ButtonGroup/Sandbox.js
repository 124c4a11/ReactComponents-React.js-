import React, { Component, Fragment } from 'react';

import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';


export default class Sandbox extends Component {
  state = {
    switchOn: true
  };

  handleSwithOn = () => this.setState({ switchOn: true });

  handleSwitchOff = () => this.setState({ switchOn: false });

  render() {
    const { switchOn } = this.state;

    return (
      <Fragment>
        <h1 className="mt-0">Button group</h1>

        <h2>1. Horizontal button group:</h2>
        <ButtonGroup>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <hr />

        <h2>2. Vertical button group:</h2>
        <ButtonGroup vertical>
          <Button active>First</Button>
          <Button>Middle</Button>
          <Button>Last</Button>
        </ButtonGroup>

        <hr />

        <h2>3. Switcher button group:</h2>
        <ButtonGroup>
          <Button
            onClick={ () => this.handleSwithOn() }
            active={ switchOn }
          >On</Button>

          <Button
            onClick={ () => this.handleSwitchOff() }
            active={ !switchOn }
          >Off</Button>
        </ButtonGroup>
      </Fragment>
    )
  }
};
