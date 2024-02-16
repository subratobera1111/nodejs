// ------------------- reading files ------------------- 

const fs = require("fs");

fs.readFile("./blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

console.log("last line");


// <------------------- writing files -------------------->

const fs = require("fs");

fs.writeFile("./blog1.txt", "business", async () => {
  console.log("file has been written");
});

fs.writeFile("./blog1.txt", "subrato", () => {
  console.log("file has been written");
});

// -------------------  directories ------------------- 

const fs = require("fs");

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created");
  });

} else {

  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted");
  });
}

// -------------------  stream and buffers ------------------- 

const fs = require("fs");

const readStream = fs.createReadStream("./blog3.txt", { encoding: "utf8" });
const writeStream = fs.createWriteStream("./blog4.txt");
readStream.on("data", (chunk) => {
  console.log("----- NEW CHUNK --- -");
  console.log(chunk);
  writeStream.write('\n NEW CHUNK \n');
  writeStream.write(chunk);
});

// -------------------  servers ------------------- 

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request made");
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

//  -------------------  requests and response ------------------- 

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/htm1");

  res.write('<head> <link rel="stylesheet" href="#"></head>');
  res.write("<p>hello, ninjas </p>");
  res.write("<p>hello again, ninjas</p>");
  res.end();
});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});

// -------------------  routing ------------------- 

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader("Content-Type", "text/htm1");

  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
        
      res.end(data);
    }
  });

});

server.listen(3000, "localhost", () => {
  console.log("listening for requests on port 3000");
});
