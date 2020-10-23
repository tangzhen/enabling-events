const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const express = require("express");

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);
server.use(middlewares);
server.use(function (req, res, next) {
  if (
    req.headers.accept &&
    req.headers.accept.indexOf("application/json") > 0
  ) {
    router(req, res);
  } else {
    next();
  }
});

server.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

server.get("/events/:id", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

server.get("/admin/create-event", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

server.use(express.static(path.join(__dirname, "../build")));
server.use("/files", express.static(path.join(__dirname, "../static/files")));

server.listen(80, () => {
  console.log("Server is running on: ", 80);
});
