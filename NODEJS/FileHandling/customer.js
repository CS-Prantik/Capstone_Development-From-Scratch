const http = require("http");
const fs = require("fs").promises;

const process_request = async (req, res) => {
  try 
  {
    res.writeHead(200, { "Content-Type": "text/json" });
    let data = await fs.readFile("customer.json", "utf-8");
    const arr = JSON.parse(data);
    for (let values of arr) 
    {
      let str = values.custname + " " + values.phoneno;
      console.log(str);
    }
    res.write(data);
    res.end();
  } 
  catch (error) 
  {
    console.log(error);
  }
};
const Server = http.createServer(process_request);
Server.listen(3000, "127.0.0.1");
console.log("Server Started at port 3000", "http://localhost:3000");
