import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { QuestEditor, QuestsTree } from '@components';
import {
  About,
  Projects
} from '@pages';

export const RoutList = () => (
  <Switch>

    <Route exact path='/'>
      <Projects />
    </Route>

    <Route path='/about'>
      <About />
    </Route>

    <Route path='/editor'>
      <QuestEditor />
    </Route>

    <Route path='/quest_tree'>
      <QuestsTree />
    </Route>

  </Switch>
);
