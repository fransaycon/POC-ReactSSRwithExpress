import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./app/home/app";

let server = port => {
  const app = express();

  app.get("/", (req, res) => {
    res.status(200).send(renderToString(<App />));
  });

  app.get("/ping", (req, res) => {
    res.status(200).send("HELLO!");
  });

  app.listen(port);
}

server(process.env.PORT || 8080);
