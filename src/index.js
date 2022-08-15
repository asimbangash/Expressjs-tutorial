const express = require('express');
const app = express();

app.get("/",(req, res)=>{
    res.send("hello world from express side");
});
app.get("/about",(req, res)=>{
    res.send("helo from the about page");
});

app.listen(7000,()=>{
    console.log("sucess");
})