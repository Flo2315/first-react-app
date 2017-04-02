import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './modules/Homepage/Homepage';
import Velib from './modules/Velib/Velib';
import Autolib from './modules/Autolib/Autolib';
import './index.scss';

ReactDOM.render(
  <Router history={hashHistory}>
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/velib" component={Velib} />
      <Route path="/autolib" component={Autolib} />
    </div>
  </Router>,
  document.getElementById('root')
);
