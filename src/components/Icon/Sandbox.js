import React, { Fragment } from 'react';

import Icon from '../Icon/Icon';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">Button</h1>

      <h2>1. Base icon:</h2>
      <Icon
        name="atom"
        size={ 2 }
        onClick={ () => console.log('click') }
      />

      <hr />

      <h2>2. Icons button group:</h2>
      <ButtonGroup>
        <Button active>
          <Icon name="align-right" />
        </Button>
        <Button>
          <Icon name="align-center" />
        </Button>
        <Button>
          <Icon name="align-left" />
        </Button>
        <Button>
          <Icon name="align-justify" />
        </Button>
      </ButtonGroup>

      <hr />

      <h2>3. Icon with size 8rem</h2>
      <Icon
        name="atom"
        size={ 8 }
      />

      <hr />

      <h2>4. Disabling icon functionality:</h2>
      <Icon
        name="atom"
        size={ 2 }
        onClick={ () => console.log('click') }
        disabled
      />
    </Fragment>
  )
};
