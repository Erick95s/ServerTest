const express = require('express');//importa la libreria de express
const body = require('body-parser');
const app = express();

const port = process.env.PORT || 8000; //env desd ela linea de comando 

app.listen(port,() => {//funcion que se ejecuta como funcion anonima 
    console.log('Conectado '+ port);
});

app.use(express.json());

app.get('/ALV',(req,res) =>{
    console.log('Peticion get');
    res = "ssss";
});

app.post('/sd',(req,res) => {
    console.log(req.body);
    res.status(200).json(req.body);
});
