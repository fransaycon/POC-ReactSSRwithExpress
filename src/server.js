import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import HomePage from './app/home/home-page';
import path from 'path';
import fs from 'fs';
import { formatHTML } from './lib/server-helpers';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

let server = port => {
    const app = express();

    app.use('/static', express.static(path.join(__dirname, '/static')));

    app.get('/', (req, res) => {
        const sheet = new ServerStyleSheet();
        const page = renderToString(sheet.collectStyles(<HomePage />));
        const styleTags = sheet.getStyleTags();
        res.status(200).send(formatHTML(page, Helmet.renderStatic(), '/static/bundle.js', styleTags));
    });

    app.get('/ping', (req, res) => {
        res.status(200).send('HELLO!');
    });

    app.listen(port, () => console.log('Server Ready!'));
}


server(process.env.PORT || 8080);
