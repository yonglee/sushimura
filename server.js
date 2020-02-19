const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/m/:title", (req, res) => {
      // console.log(`/m/${req.params.title}`);
      // const actualPage = "/menus";
      const actualPage = "/menus";
      const queryParams = { title: req.params.title };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
