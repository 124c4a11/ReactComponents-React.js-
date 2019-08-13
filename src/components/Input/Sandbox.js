import React, { Fragment } from 'react';
import Input from './Input';


export default () => {
  return (
    <Fragment>
      <h1 className="mt-0">Input</h1>

      <h2>1. Base Input type text:</h2>
      <Input id="text" type="text" />

      <hr />

      <h2>2. Input type number (with label):</h2>
      <Input id="number" label="select number" type="number" />

      <hr />

      <h2>3. Input type password (with error):</h2>
      <Input id="password" error="wrong password" type="password" />

      <hr />

      <h2>4. Input type week (with label and error):</h2>
      <Input id="week" label="week" error="wrong week" type="week" />

      <hr />

      <h2>5. Input type date (requered):</h2>
      <Input id="date" required type="date" />

      <hr />

      <h2>6. Input type file (label & required):</h2>
      <Input id="file" label="file" required type="file" />

      <hr />

      <h2>7. Input type color:</h2>
      <Input id="color" type="color" />

      <hr />

      <h2>8. Input type range (default value is 80%):</h2>
      <Input id="range" value="80" onChange={ () => {} } type="range" />

      <hr />

      <h2>9. Input type checkbox (checked):</h2>
      <Input id="checkbox" checked onChange={ () => {} } type="checkbox" />

      <hr />

      <h2>10. Input type radio (disabled):</h2>
      <Input id="radio" disabled type="radio" />
    </Fragment>
  );
};
