export let formatHTML = (appStr, helmet, js, styleTags) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${styleTags}
        </head>
        <body style="margin: 0px;"">
          <div id="app">
            ${ appStr }
          </div>
          <script src=${js}></script>
        </body>
      </html>
    `;
}
