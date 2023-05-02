const express = require('express');
const cors = require("cors");
const app = express();

const chefs = require("./chefs.json");
app.use(cors())
app.get('/', (req, res) =>{
    res.json({mess: "hi"});
});

app.get('/chefs', (req, res) =>{
    res.json(chefs);
})

app.listen(5000, () =>{
    console.log("server running")
})