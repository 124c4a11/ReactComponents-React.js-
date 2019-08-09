import React, { Fragment } from 'react';

import Image from './Image';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">Image</h1>

      <h2>1. Base image placeholder:</h2>
      <Image />

      <hr />

      <h2>2. Image with src and alt attribute:</h2>
      <Image
        src="https://picsum.photos/id/222/200/300"
        alt="sky"
        width={ 300 }
        height={ 200 }
      />

      <hr />

      <h2>3. Image placeholder with 50x50, 100x100 and 150x150 sizes:</h2>
      <Image width={ 50 } height={ 50 } style={{ marginRight: '20px' }} />
      <Image width={ 100 } height={ 100 } style={{ marginRight: '20px' }} />
      <Image width={ 150 } height={ 150 } />

      <hr />

      <h2><span>4. Circle image with 150x150 size:</span></h2>
      <Image
        src="https://picsum.photos/id/110/150/150"
        width={ 150 }
        height={ 150 }
        circle
      />
    </Fragment>
  );
};
