import React, { Fragment } from 'react';

import Tooltip from '../Tooltip/Tooltip';
import Button from '../Button/Button';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">Tooltip</h1>

      <h2>1. Simple Right tooltip with big description:</h2>
      <Tooltip
        position="right"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
      >Test</Tooltip>

      <hr />

      <h2>2. Left tooltip with outer styles:</h2>
      <Tooltip
        position="left"
        content="Simple small text"
        style={{ width: '120px' }}
      >Test</Tooltip>

      <hr />

      <h2>3. Bottom tooltip of custom component:</h2>
      <Tooltip
        position="bottom"
        content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
      >
        <Button>Exit</Button>
      </Tooltip>

      <hr />

      <h2>4. Top tooltip of text element:</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <Tooltip
          position="top"
          content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a"
        >
          <span style={{ textDecoration: 'underline', padding: '0 4px' }}>Lorem</span>
        </Tooltip>
      Ipsum has been the industry's standard dummy text ever since the 1500s</p>
    </Fragment>
  )
};
