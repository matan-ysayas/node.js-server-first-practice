const httpServer=require('http').Server;
const fs=require('fs');
class server21 extends httpServer{
    constructor(){
        super();
        this.listen(4002);
        this.on("request",this.requestHandler)
    }
    requestHandler(request, response) {
        const src = fs.createReadStream("./usersArray21.json");
        src.pipe(response);
    }
}

module.exports=new server21();