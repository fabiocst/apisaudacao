const express = require('express');
const app = express();
const port = 3000;

app.get('/hora-atual', (req, res) => {
    const dataAtual = new Date();
    const hora = dataAtual.getHours().toLocaleString();
    if(hora>6 && hora<12){
        res.json("Bom dia");
    }
    else if(hora>=12 && hora <18){
        res.json("Boa tarde");
        // res.json({hora});
        // res.json(dataAtual);
    }
    else{
        res.json("Boa noite");
    }
});
module.exports=app;