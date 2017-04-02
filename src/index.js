import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Homepage from './modules/Homepage/Homepage';
import Velib from './modules/Velib/Velib';
import Autolib from './modules/Autolib/Autolib';
import './index.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/velib" component={Velib} />
    <Route path="/autolib" component={Autolib} />
  </Router>,
  document.getElementById('root')
);
