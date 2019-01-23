import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app/home";
import express from "express";
import path from "path";

let formatHTML = (content, js) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello world!</title>
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
  const content = renderToString(<App />);

  app.use("/static", express.static(path.join(__dirname, '/static')));

  app.get("/", (req, res) => {
    res.status(200).send(formatHTML(content, "/static/bundle.js"));
  });

  app.listen(port, () => console.log("Server Ready!"));
}


server(process.env.PORT || 8080);
