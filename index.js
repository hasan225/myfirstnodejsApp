const http = require("http");
const fs = require("fs");

const port = process.env.PORT;
// const hostName = "127.0.0.1";

http
  .createServer((req, res) => {
    const handleReadFIle = (statusCode, fileLocation) => {
      fs.readFile(fileLocation, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(statusCode, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        }
      });
    };
    if (req.url === "/") {
      handleReadFIle(200, "pages/index.html");
    } else if (req.url === "/about") {
      handleReadFIle(200, "pages/about.html");
    } else if (req.url === "/contact") {
      handleReadFIle(200, "pages/contact.html");
    } else {
      handleReadFIle(404, "pages/404.html");
    }
  })
  .listen(port, () => {
    console.log(`your server is open `);
  });
