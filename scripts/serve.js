const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const express = require("express");

server.use(express.static(path.join(__dirname, "../build")));
server.use("/files", express.static(path.join(__dirname, "../static/files")));
server.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(middlewares);
server.use(router);

server.listen(80, () => {
  console.log("Server is running on: ", 80);
});
