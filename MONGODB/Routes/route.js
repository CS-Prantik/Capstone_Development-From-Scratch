const express = require("express");
const router = express.Router();
const Contact = require("../Models/Model");
const middleware=(req,res,next)=>{
    console.log(`${req.method} ${req.body}`)
    next()
}
router.use(middleware)

router.get("/", (req, res) => {
  res.send(__dirname, "contents", "index.html");
});
router.post("/submit-data", (req, res) => 
  {
  const { name, email, phoneno } = req.body;
  const newcontact = new Contact({name, email, phoneno });
  newcontact
    .save()
    .then(() => console.log("Registration Succesfull"))
    .catch((err) => console.log(err));
     res.send("User Registration Succesfull");
});
router.get("/get-data", async (req, res) => {
  const user = await Contact.find();
  res.send(user);
});

router.put("/update/:id",async(req,res)=>
  {
    
    const id=req.params.id;
    const body=req.body
    console.log("Body: ",body);
     const updatedData= await Contact.findOneAndUpdate(id,{$set: {name: body.name}}, {new: true})
     res.send(updatedData)
})

router.patch("/updatedescription",async(req,res)=>{
      await Contact.findOneAndUpdate(
        {
          title:req.body.name
        },
        {
          $set:{ phone:req.body.phone}
          
        },
        {new:true}
      )
      res.send("updated")
})


module.exports = router;
