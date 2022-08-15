const path = require('path');
const express = require('express');
const { dirname } = require('path');
const app = express();

const useStatic = path.join(__dirname, "../public");

// builtin middleware
app.use(express.static(useStatic));
app.get("/",(req, res)=>{
    res.send("hello world from express side");
});
app.get("/about",(req, res)=>{
    res.send("helo from the about page");
});

app.listen(7000,()=>{
    console.log("sucess");
})