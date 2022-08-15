const express = require('express');
const app = express();

// send html data
app.get("/",(req, res)=>{
    res.write("<h1>hello from the home page side</h1>");
    res.write("<h1>hello from the home page once again</h1>");
    res.send();
});

// sned JSON data
// app.get("/about",(req, res)=>{
//     res.send({
//         id:1,
//         name:"asim",
//     });
// });

// OR
app.get("/about",(req, res)=>{
    res.json([{
        id:1,
        name:"asim",
    },
    {
        id:2,
        name:"mohib",
    },
    {
        id:3,
        name:"mehtab",
    },
]);
});

app.listen(4000, ()=>{
    console.log("completed");
});