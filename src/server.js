import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app/home";
import express from "express";
import path from "path";
import { ServerStyleSheet } from "styled-components";

let formatHTML = (content, style, js) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello world!</title>
        ${style}
      </head>
      <body style="margin: 0px;"">
        <div id="app">
          ${content}
        </div>
        <script src=${js}></script>
      </body>
    </html>
  `;
}

let server = port => {
  const app = express();
  const sheet = new ServerStyleSheet();
  const content = renderToString(sheet.collectStyles(<App />));

  app.use("/static", express.static(path.join(__dirname, '/static')));

  app.get("/", (req, res) => {
    res.status(200).send(formatHTML(content, sheet.getStyleTags(), "/static/bundle.js"));
  });

  app.listen(port, () => console.log("Server Ready!"));
}


server(process.env.PORT || 8080);
