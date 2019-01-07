import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app/home/app";
import path from "path";
import fs from "fs";

let server = port => {
  const app = express();

  app.use("/static", express.static(path.join(__dirname, '/static')));

  app.get("/", (req, res) => {
    res.status(200).send(renderMarkup(renderToString(<App />)));
  });

  app.get("/ping", (req, res) => {
    res.status(200).send("HELLO!");
  });

  app.listen(port, () => console.log("Server Ready!"));
}

let renderMarkup = html => {
  return `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Webpack SSR Demo</title>
            <meta charset="utf-8" />
            <link rel="stylesheet" type="text/css" href="/static/styles/bundle.css">
        </head>
        <body>
            <div id="app">${html}</div>
            <div><h1>HELLO!</h1></div>
            <script src="/static/bundle.js"></script>
        </body>
    </html>
 `;
}

server(process.env.PORT || 8080);
