const httpServer = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);
class myServer extends httpServer {
  constructor() {
    super();
    this.on("request", this.resMj);
    this.listen(3000);
  }
  resMj = (req, res) => {
    readFilePromise("./MJorden.txt")
      .then((data) => res.end(data))
      .catch((err) => res.end("error with info"));
  };
}
module.exports = new myServer();
