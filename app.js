const express = require("express");
const app = express();



app.get('/', (req, res) =>{
    
    let name = "desconocido";

    if(req.query.nombre){
        name = req.query.nombre;
    }
    
    res.send(`<h1>Hola ${name}!</h1>`);    
});

app.listen(3000, () =>{ console.log('3000 on line')});
