const express = require('express');

const app = express();

const chef = require("./chef.json");

app.get('/', (req, res) =>{
    res.json({mess: "hi"});
});

app.get('/allData', (req, res) =>{
    res.json(chef);
})

app.listen(5000, () =>{
    console.log("server running")
})