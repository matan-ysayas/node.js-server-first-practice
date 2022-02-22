const httpServer=require('http').Server;
const fs=require('fs');
const util=require('util');
const readFilePromise=util.promisify(fs.readFile);

class server18 extends httpServer{
    constructor(){
        super();
        this.on('request',this.onParrot)
        this.listen(2020)
    }

    onParrot=(rej,res)=>{
        readFilePromise('./parrot18.json')
        .then((data)=>res.end(data))
        .catch((err)=>res.end("info error"))
    }
}
module.exports=new server18();

