const express = require('express');
const app = express();
const cors=require('cors')
app.use(express.urlencoded({ extended: false }));
app.use(express.static('contents'));
app.use(express.json());
const courses=[{id:1,name:"JSON"},{id:2,name:"rantik"},{id:3,name:"John"}]
app.get("/", (req, res) => {
    let str = "<h1>Hello World</h1>";
    str += "Do you want to <a href='rest.html'>Add new Courses</a>";
    res.send(str);
});

// app.get("/rest.html", (req, res) => {
//     res.sendFile(__dirname + "/contents/rest.html");
// });

app.get("/api/courses",(req,res)=>{
    res.send(courses)
})
app.post("/api/courses",(req,res)=>{
      console.log(req.body)
      let obj = req.body
      //obj.id = courses.length+1
      obj.id = courses[courses.length-1].id+1
      console.log(req.body)
	  courses.push(obj);
	res.send("Added course : " + JSON.stringify(obj));
})
//Logic to look for a given id:
app.get("/api/courses/:id",(req,res)=>{
    var course;
     for(let i in courses)
     {
        if(courses[i].id===parseInt(req.params.id))
        {
            console.log("Id Found")
            course=courses[i];
            break;
        }
     }
     res.send(course);
})
app.delete("/api/courses/:id",(req,res)=>{
    var course,index=-1,i;
    for(let i in courses)
    {
        index++;
        if(courses[i].id===parseInt(req.params.id))
        {
            console.log("Id Found");
            course=courses[i];
            i=index;
            break;
        }
    }
    courses.splice(i,1);
    res.send(course)
    console.log(courses);
})
app.listen(3000, () => {
    console.log("Server Started at port 3000");
});
