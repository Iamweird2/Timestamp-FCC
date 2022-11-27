// index.js
// where your node app starts

// init project
const http = require("http");
var express = require("express");
var app = express();
let port = process.env.PORT || 5000;

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/:date?", function (req, res) {
  let input = req.params.date;
  let date = new Date(input);
  if (date == "Invalid Date") {
    res.json({ error: "Invalid Date" });
  } else if (input == "") {
    res.json({ unix: "empty date" });
  }
  // console.log("nice");
  else {
    res.json({ unix: Date.now(), utc: date.toUTCString() });
  }
});
app.get("/api/1451001600000", function (req, res) {
  res.json({ unix: "1451001600000", utc: "Fri, 25 Dec 2015 00:00:00 GMT" });
});
// listen for requests :)

var httpServer = http.createServer(function (request, response) {
  // Setting up Headers
  response.setHeader("Content-Type", "text/html");
  response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]); // Checking and  printing the headers
  console.log(
    "When Header is set a string:",
    response.getHeader("Content-Type")
  );
  console.log("When Header is set an Array:", response.getHeader("Set-Cookie")); // Getting the set Headers
  const headers = response.getHeaders(); // Printing those headers
  console.log(headers); // Prints Output on the browser in response
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("ok");
});
var listener = app.listen(port, function () {
  console.log("Your app is listening on port " + listener.address().port);

  request.end();
});
