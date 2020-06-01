import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  About,
  Home
} from '@pages';

export const RoutList = () => (
  <Switch>
    <Route exact path='/'>
      <Home />
    </Route>

    <Route path='/about'>
      <About />
    </Route>
  </Switch>
);
