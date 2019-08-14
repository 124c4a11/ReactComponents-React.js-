import React, { Fragment } from 'react';

import Tabs from './Tabs';
import TabsItem from './TabsItem';

import Image from '../Image/Image';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">Tabs</h1>

      <h2>1. Horizontal Tabs:</h2>
      <Tabs>
        <TabsItem label="Simple text">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TabsItem>
        <TabsItem label="Image">
          <Image
            src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
            width={ 150 }
            height={ 150 }
          />
        </TabsItem>
        <TabsItem label="Component">
          <ButtonGroup>
            <Button active>First</Button>
            <Button>Middle</Button>
            <Button>Last</Button>
          </ButtonGroup>
        </TabsItem>
        <TabsItem label="Just empty tab" />
      </Tabs>

      <hr />

      <h2>2. Vertical Tabs:</h2>
      <Tabs vertical>
        <TabsItem label="Simple text">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TabsItem>
        <TabsItem label="Image">
          <Image
            src="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
            width={ 150 }
            height={ 150 }
          />
        </TabsItem>
        <TabsItem label="Component">
          <ButtonGroup>
            <Button active>First</Button>
            <Button>Middle</Button>
            <Button>Last</Button>
          </ButtonGroup>
        </TabsItem>
      </Tabs>
    </Fragment>
  );
};
