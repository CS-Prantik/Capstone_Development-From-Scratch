var http=require('http')
var fs=require('fs')
function process_request(req,res)
{
    // fs.writeFileSync("Test.txt", "Hello World");
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write("File created successfully!");
    // res.end();

    // let data=fs.readFileSync("Test.txt",'utf-8')
    // res.writeHead(200,{'Content-type':'text/plain'})
    // res.write(data);
    // res.end("")

    //Asynchronus
    // fs.writeFile("file.txt","Hello World",function(err){
    //     if(err)
    //     {
    //         console.log(err)
    //     }
    //     else
    //     {
    //         res.writeHead(200,{'Content-type':'text/plain'})
    //         res.write("File Has been created");
    //         res.end()
    //     }
    // })
    
    fs.readFile("file.txt",'utf-8',function(err,data){
        if(err)
        {
            console.log("Error in reading file",err);
        }
        else
        {
            res.writeHead(200,{'Content-type':'text/plain'})
            res.write(data);
            res.end();
        }
    })
}
var server=http.createServer(process_request);
server.listen(3000,'127.0.0.1')
console.log("Server Started At port 3000",'http://localhost:3000')
