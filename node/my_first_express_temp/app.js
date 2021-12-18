"use strict";
const HTTP = require("http");

const hostname = "127.0.0.1";
const port = 3333;

const express = require("express");
const app = express();

const es6Renderer = require("express-es6-template-engine");
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const SERVER = HTTP.createServer(app);

SERVER.listen(port, hostname, () => {
  console.log(`YO JOE! Coming in hot @ http://${hostname}:${port}`);
});

const rootController = require("./routes/index");
const friendsController = require("./routes/friends");

app.use("/", rootController);
app.use("/friends", friendsController);
