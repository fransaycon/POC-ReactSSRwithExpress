import express from 'express';
import fs from 'fs';
import Main from './app/main';
import path from 'path';
import React from 'react';
import { formatHTML } from './lib/server-helpers';
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { StaticRouter } from 'react-router-dom';

let server = port => {
    const app = express();

    app.use('/static', express.static(path.join(__dirname, '/static')));

    app.get('/*', (req, res) => {
        const sheet = new ServerStyleSheet();
        const page = renderToString(sheet.collectStyles(
            <StaticRouter location={req.url} context={context}>
                <Main />
            </StaticRouter>
        ));
        const styleTags = sheet.getStyleTags();
        const context = {};

        res.status(200).send(
            formatHTML(
                page,
                Helmet.renderStatic(),
                '/static/bundle.js',
                styleTags,
            )
        );
    });

    app.get('/ping', (req, res) => {
        res.status(200).send('HELLO!');
    });

    app.listen(port, () => console.log('Server Ready!'));
}


server(process.env.PORT || 8080);
