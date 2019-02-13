import React from 'react';
import { hydrate } from 'react-dom';
import HomePage from './home-page';

hydrate(<HomePage />, document.getElementById('app'));
