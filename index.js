const http=require('http')
const fs =require('fs')

const server=http.createServer((req, res)=>{
    if(req.url=='/'){
        fs.readFile(__dirname + '/index.html',(err, data)=>{
            if(err){
                res.writeHead(500);
                res.end("error handling the page")
    
            }else{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            }
        })
    }
})