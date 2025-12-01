const express = require('express');
const path = require('path');
const app = express();

// To read POST form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("contents"));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "contents", "index.html"));
});


// POST route because form uses method="post"
app.post("/submit-data", (req, res) => {
    console.log(req.body.firstname);
    console.log(req.body.lastname);

    res.send(req.body.firstname + "," + req.body.lastname);
});

app.listen(3000, () => {
    console.log("Server Started at port 3000");
});
