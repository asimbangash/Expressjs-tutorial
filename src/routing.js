const express = require('express');
const app = express();
const port = 3000;

app.get("/",(req, res)=>{
    res.send("hello from the home page");
});

app.get("/about",(req, res)=>{
    res.send("hello from the about page");
});

app.get("/contact",(req, res)=>{
    res.send("hello from the contact page");
});

app.get("/temp",(req, res)=>{
    res.send("hellloo from the temperature page");
});

app.listen(port,()=>{
    console.log(`helo from the port no ${port}`);
});