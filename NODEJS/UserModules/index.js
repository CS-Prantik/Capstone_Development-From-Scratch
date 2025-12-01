var http=require('http');
//Manually Creating Server Using Sample NodeJs
function process_request(req,res)
{
    var body="Hello world";
    var content_length=body.length;
    res.writeHead(200,{'Content-length':content_length,'Content-Type':'text/plain'})
    res.end(body)

}
var server=http.createServer(process_request)
server.listen(3000,'127.0.0.1')
console.log("Server is running at port 3000")