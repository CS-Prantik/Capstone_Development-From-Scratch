var http=require('http')
var fs=require('fs');


function process_request(req,res)
{
    if(req.method=='GET' && req.url=='/')
    {
        fs.readFile("form.html",function(err,data){
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data);
            res.end()
        })
    }
    else if(req.method==='POST' && req.url==='/process')
    {
        var body="";
        req.on('data',function(data)
        {
              body+=data;
            res.writeHead(200,{'Content-Type':'text/html'})
            var arr=data.split('&')
            res.write("Welcome" + arr);
            res.end()
        })

    }
}
const Server=http.createServer(process_request);
Server.listen(3000,'127.0.0.1')
console.log("Server Started Succesfully");