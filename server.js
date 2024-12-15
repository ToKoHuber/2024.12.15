const http = require("http");
const todos = require("./db.js");

function test(req, res) {
  res.writeHead(200, { "Content-type": "application/json" });
  res.end(todos.toString());
}

http.createServer(test).listen(8080);
