import React, { Fragment } from 'react';

import Button from './Button';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">Button</h1>

      <h2>1. Text and onClick function:</h2>
      <Button onClick={ () => console.log('click') }>Button</Button>

      <hr />

      <h2>2. Disabled button:</h2>
      <Button onClick={ () => console.log('click') } disabled>Button</Button>

      <hr />

      <h2>3. Active button:</h2>
      <Button active />

      <hr />

      <h2>4. Supporting data. type and etc attributes:</h2>
      <Button data-name="button"/>
      <Button type="subbmit" style={{ 'marginLeft': '10px' }} />

      <hr />

      <h2>5. Supporting data. type and etc attributes:</h2>
      <Button href="#">Link</Button>
      <Button href="#" disabled style={{ 'marginLeft': '10px' }}>Link</Button>
    </Fragment>
  )
}
