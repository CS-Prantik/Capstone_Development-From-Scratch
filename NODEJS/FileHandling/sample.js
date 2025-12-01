const http = require("http");
const fs = require("fs").promises;

 async function process_request(req, res) {
  try 
  {
    res.writeHead(200, { "Content-Type": "text/plain" });

    let data = await fs.readFile("sample.txt", "utf-8");
   
    let arr = JSON.parse(data);
    console.log(arr);

    let convert = JSON.stringify(arr);
    res.write(convert);
    res.end();
  } 
  catch (err) 
  {
    console.log(err);
    res.write("Error: " + err.message);
    res.end();
  }
}

const Server = http.createServer(process_request);
Server.listen(3000, "127.0.0.1");

console.log("Server has Started on port 3000", "http://localhost:3000");
