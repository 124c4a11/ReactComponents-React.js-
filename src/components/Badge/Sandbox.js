import React, { Fragment } from 'react';

import Badge from './Badge';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">Badge</h1>

      <h2>1. Badges with text:</h2>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="envelope" />
        <Badge value="new" />
      </Button>
      <Button>
        <Icon name="envelope" />
        <Badge circle value="new" />
      </Button>

      <hr />

      <h2>2. Badges with number:</h2>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="comment" />
        <Badge value={ 2 } />
      </Button>
      <Button>
        <Icon name="comment-dots" />
        <Badge circle value={ 12 } />
      </Button>

      <hr />

      <h2>3. Inline Badges:</h2>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="phone" />
        <Badge inline value={ 1 } style={{ marginLeft: '10px' }} />
      </Button>
      <Button>
        <Icon name="phone" />
        <Badge inline value="1 missed" style={{ marginLeft: '10px' }} />
      </Button>

      <hr />

      <h2>4. Outer Badges:</h2>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="bell" />
        <Badge outer value={ 1 } />
      </Button>
      <Button>
        <Icon name="wifi" />
        <Badge outer warning value={ 1 } />
      </Button>

      <hr />

      <h2>5. Warning, Alert, Success, Info Badges:</h2>
      <Button style={{ marginRight: '20px', marginBottom: '20px' }}>
        <Icon name="bullhorn" />
        <Badge circle warning value={ 1 } />
      </Button>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="inbox" />
        <Badge circle alert value={ 1 } />
      </Button>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="paper-plane" />
        <Badge circle success value={ 1 } />
      </Button>
      <Button>
        <Icon name="rss" />
        <Badge circle info value={ 1 } />
      </Button>
      <br />
      <Button style={{ marginRight: '20px' }}>
        <Icon name="bullhorn" />
        <Badge warning value={ 1 } />
      </Button>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="inbox" />
        <Badge alert value={ 1 } />
      </Button>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="paper-plane" />
        <Badge success value={ 1 } />
      </Button>
      <Button style={{ marginRight: '20px' }}>
        <Icon name="rss" />
        <Badge info value={ 1 } />
      </Button>
    </Fragment>
  );
};
