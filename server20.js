const httpServer = require("http").Server;
const fs = require("fs");

class server20 extends httpServer {
  constructor() {
    super();
    this.listen(3002);
    this.on("request",this.requestHandler);
  }
  requestHandler(request, response) {
    const src = fs.createReadStream("./user20.json");
    src.pipe(response);

  }
}

module.exports=new server20();