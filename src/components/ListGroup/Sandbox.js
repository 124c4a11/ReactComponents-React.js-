import React, { Fragment } from 'react';

import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import Button from '../Button/Button';
import Badge from '../Badge/Badge';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">List group</h1>

      <h2>1. Base Group list:</h2>
      <ListGroup>
        <ListGroupItem>List item 1</ListGroupItem>
        <ListGroupItem>List item 2</ListGroupItem>
        <ListGroupItem>List item 3</ListGroupItem>
        <ListGroupItem>List item 4</ListGroupItem>
      </ListGroup>

      <hr />

      <h2>2. Group list with active and disabled elements:</h2>
      <ListGroup>
        <ListGroupItem active>List item 1</ListGroupItem>
        <ListGroupItem>List item 2</ListGroupItem>
        <ListGroupItem disabled>List item 3</ListGroupItem>
        <ListGroupItem>List item 4</ListGroupItem>
      </ListGroup>

      <hr />

      <h2>3. Group list with custom components:</h2>
      <ListGroup>
        <ListGroupItem>
          List item 1
          <Badge value={2} inline />
        </ListGroupItem>
        <ListGroupItem>
          List item 2
          <Badge value="new" inline />
        </ListGroupItem>
        <ListGroupItem>
          List item 3
          <Badge value={10} warning inline />
        </ListGroupItem>
        <ListGroupItem>
          List item 4
          <Button>Update</Button>
        </ListGroupItem>
      </ListGroup>

      <hr />

      <h2>4. Group list links:</h2>
      <ListGroup tag="div">
        <ListGroupItem href="/" active>List item 1</ListGroupItem>
        <ListGroupItem href="/">List item 2</ListGroupItem>
        <ListGroupItem href="/">List item 3</ListGroupItem>
        <ListGroupItem href="/">List item 4</ListGroupItem>
      </ListGroup>
    </Fragment>
  )
};
