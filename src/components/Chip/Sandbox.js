import React, { Fragment } from 'react';

import Chip from './Chip';
import Example from './Example';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">Chip</h1>

      <h2>1. Chip with text:</h2>
      <Chip text="User name" />

      <hr />

      <h2>2. Chip with long text:</h2>
      <Chip text="Very long chip text should be cropped" />

      <hr />

      <h2>3. Chips with icon and close button:</h2>
      <Chip text="Chip" withIcon />
      <Chip text="Chip" withClose />

      <hr />

      <h2>4. Full Chip:</h2>
      <Chip text="Full Chip" withIcon withClose />

      <hr />

      <h2>5. Chip with image:</h2>
      <Chip
        text="React"
        withImage
        imgSrc="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
        imgAlt="react"
      />

      <hr />

      <h2>6. Chip with actions on Body and cross-icon:</h2>
      <Chip
        text="React"
        withImage
        imgSrc="https://pp.userapi.com/a9QrnDt7kgIb8VkcrCWpCoqd7JRwq5wX_YDr7Q/pOMxeuWzvxg.jpg?ava=1"
        imgAlt="react"
        onChipClick={() => { console.log('clicked on a chip body'); }}
      />
      <Chip
        text="Angular"
        withImage
        imgSrc="https://wishtackblog.files.wordpress.com/2017/03/angular.png?w=748"
        imgAlt="angular"
        onCloseClick={() => { console.log('clicked on a close icon'); }}
        withClose
      />
      <Chip
        text="Vue"
        withImage
        imgSrc="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
        imgAlt="vue"
        onCloseClick={() => { console.log('clicked on a close icon'); }}
        onChipClick={() => { console.log('clicked on a chip body'); }}
        withClose
      />

      <hr />

      <h2>7. Example of using:</h2>
      <Example />
    </Fragment>
  )
};
