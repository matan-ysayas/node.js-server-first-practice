const myHttpServer = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);

class myServer2 extends myHttpServer {
  constructor() {
    super();
    this.on("request", this.resHaifa);
    this.listen(8080);
  }
  resHaifa = (rej,res) => {
    readFilePromise("./haifa.txt")
      .then((data) => res.end(data))
      .catch((err) => res.end("info err"));
  };
}
module.exports = new myServer2();
