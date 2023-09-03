let fs = require("fs");
let server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Solution 2: Streams
  // let legible = fs.createReadStream("test-file.txt");
  // legible.on("data", chunk => {
  //   res.write(chunk);
  // });
  // legible.on("end", () => {
  //   res.end();
  // });
  // legible.on("error", err => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });

  // Solution 3
  let legible = fs.createReadStream("test-file.txt");
  legible.pipe(res);

  // legibleSource.pipe(writeableDest)
});
server.listen(6666, "127.0.0.1", () => {
  console.log("Listening");
});