const express = require("express");
const next = require("next");

process.on("unhandledRejection", (reason, promise) => {
  console.error("UNHANDLED PROMISE REJECTION");
  console.error(reason);
});

const port = process.env.PORT || 4000;
const dev = false;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.static("public"));

  //Handle all Next.js pages
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => console.log(`Port ${port} is now active!`));
});
