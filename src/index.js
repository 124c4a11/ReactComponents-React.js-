import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

import './index.scss';

import App from './App';

import ButtonSandbox from './components/Button/Sandbox';
import ButtonGroupSandbox from './components/ButtonGroup/Sandbox';
import IconSandbox from './components/Icon/Sandbox';
import ImageSandbox from './components/Image/Sandbox';


ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={ ButtonSandbox }/>
        <Route exact path="/button_group" component={ ButtonGroupSandbox }/>
        <Route exact path="/icon" component={ IconSandbox }/>
        <Route exact path="/image" component={ ImageSandbox }/>
      </Switch>
    </App>
  </BrowserRouter>
, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
