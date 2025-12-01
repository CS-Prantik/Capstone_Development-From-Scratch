const { writeFile } = require('fs/promises')
const http=require('http')
const fs=require('fs').promises
process_request=async(req,res)=>
{

        res.writeHead(200,{'Content-Type':'text/plain'})
        try {
              console.log(await fs.writeFile("log.txt","Hello Prantik"))
              let data=await fs.readFile("log.txt",'utf-8')
              res.write(data);
              res.end()
        } catch (error) {
            res.end("Error")
        }
}


const server=http.createServer(process_request)
server.listen(3000,'127.0.0.1')
console.log(server)
console.log("Server Started at port 3000")