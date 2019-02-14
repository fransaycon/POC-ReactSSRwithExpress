import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import Main from './main';

hydrate(
    <BrowserRouter>
        <Main />
    </BrowserRouter>,
    document.getElementById('app')
);
