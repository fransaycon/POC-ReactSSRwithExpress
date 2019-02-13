import React from 'react';
import { hydrate } from 'react-dom';
import App from './components/app';

if(typeof document !== 'undefined'){
    hydrate(<App />, document.getElementById('app'));
}
