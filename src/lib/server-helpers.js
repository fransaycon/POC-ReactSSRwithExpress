export let formatHTML = js => {
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
