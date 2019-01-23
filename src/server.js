import express from "express";
import path from "path";

let formatHTML = js => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Hello world!</title>
      </head>
      <body style="margin: 0px;"">
        <div id="app" />
        <script src=${js}></script>
      </body>
    </html>
  `;
}

let server = port => {
  const app = express();

  app.use("/static", express.static(path.join(__dirname, '/static')));

  app.get("/", (req, res) => {
    res.status(200).send(formatHTML("/static/bundle.js"));
  });

  app.listen(port, () => console.log("Server Ready!"));
}


server(process.env.PORT || 8080);
