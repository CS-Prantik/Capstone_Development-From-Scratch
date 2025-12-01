const express=require('express');
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('contents'))
require("./DB/db_conn")
app.use(express.json())
app.use(require('./Routes/route'))
// const newcontact=new Contact({
//     name:"Prantik",
//     email:"deprantik2001@gmail.com",
//     phoneno:"98637546"
// })
// newcontact.save().then(
//     ()=>{console.log("Contact Created")}
// ).catch((err)=>{console.log(err)})

// Contact.find().then((contact)=>{console.log(contact)})

// Contact.findOneAndUpdate({name:"Prantik"},{name:"John"})
// .then(()=>{console.log("Contact Updated")})
// .catch((err)=>{console.log(err)})

//Contact.deleteOne({name:"John"}).then(()=>{console.log('Contact Deleted')}).catch((err)=>{console.log(err)})



app.listen('3000',()=>{
    console.log("Server Started At port 3000",'http://localhost:3000');
})
