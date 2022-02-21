const httpServer=require('http').Server;

class FirstServer extends httpServer{
    constructor(){
        super();
        this.on('request',this.resHello)
        this.listen(3000);
    }
    resHello=(req,res)=>{
        res.end("Hello World!")
    }
}
module.export=new FirstServer();
