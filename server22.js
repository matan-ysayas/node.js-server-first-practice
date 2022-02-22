const httpServer=require('http').Server;
const fs=require('fs');

class server22 extends httpServer{
    constructor(){
        super();
        this.listen(7000)
        this.on("request",this.requestHandler)
    }
    requestHandler(request, response) {
        const src = fs.createReadStream("./manager22.json");
        src.pipe(response);
        response.statusCode=201;
    }
}
module.exports=new server22();