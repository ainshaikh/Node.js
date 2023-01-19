// Building a simple web server and API call with synchronous

const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(
  "../starter/dev-data/data.json",
  "utf-8",
  (err, data) => {
    const dataObj = JSON.parse(data);
  }
);
const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is the OVERVIEW");
  } else if (pathName === "/product") {
    res.end("This is the PRODUCT");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "Hello world",
    });
    res.end("<h4>Page not found</h4>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on the port 8000");
});
