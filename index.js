const express = require('express');
const cors = require("cors");
const app = express();

const chefs = require("./chefs.json");

const chefInfo = require("./chefInfo.json");

app.use(cors())
app.get('/', (req, res) =>{
    res.json({mess: "hi"});
});

app.get('/chefs', (req, res) =>{
    res.json(chefs);
})

app.get('/chefInfo', (req, res) => {
    res.send(chefInfo);
})

app.get('/chefInfo/:id', (req, res) => {
    const id = req.params.id;
    const singleChef = chefInfo.find(item => item.id === id);
    res.send(singleChef);
})

app.listen(5000, () =>{
    console.log("server running")
})