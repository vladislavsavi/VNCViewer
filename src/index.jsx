import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from '@components';
import '@asts/styles/insex.scss';
import { RoutList } from './RoutList';

ReactDOM.render(
  <Wrapper>
    <RoutList />
  </Wrapper>
  , document.getElementById('root'));
