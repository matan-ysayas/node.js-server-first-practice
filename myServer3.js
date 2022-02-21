const HttpServer = require("http").Server;
const fs = require("fs");
const util = require("util");
const readFilePromise = util.promisify(fs.readFile);

class myServer3 extends HttpServer{
    constructor(){
        super();
        this.on('request',this.resNameArray)
        this.listen(9090)
    }
resNameArray=(rej,res)=>{
    readFilePromise('./namesArray.json')
    .then((data)=>res.end(data))
    .catch((err)=>res.end("info err"));
}

}
module.exports=new myServer3();