const http = require("http");
function process_request(req, res) {
  async function logfetch(url) 
  {
    res.writeHead(200, { "Content-Type": "text/json" });
    try 
    {
      const response = await fetch(url);
      const data=response.text;
      res.write(data);
      res.end();

    } 
    catch (err) 
    {
      console.log(err);
      res.end("Error in fetching data")
    }
  }
  logfetch("http://jsonplaceholder.typicode.com/users");
}

const Server = http.createServer(process_request);
Server.listen(3000, "127.0.0.1");
console.log("Server is listening on port 3000", "http://localhost:3000");
